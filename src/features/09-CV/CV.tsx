import { useEffect, useState } from "react"
import "regenerator-runtime/runtime";
import { pdfjs, Document, Page } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { useGetResumeQuery } from "../shared/sanityAPI";
import { match, __ } from "ts-pattern";
// import { downloadResource } from "../../../utils/fetches";

export const CV = () => {

    const { isLoading, error, data } = useGetResumeQuery()

    const [cvLink, setCvLink] = useState(data?.resumeURL);

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const getWindowDimension = (whichSide: string) => ( whichSide === 'width' ? window.innerWidth : window.innerHeight)
    
    const [windowDimensions, setWindowDimensions] = useState({'width': getWindowDimension('width'), 'height': getWindowDimension('height'), 'lesserValue': getWindowDimension('width')})
    
    const handleResize = () => {
        setWindowDimensions({'width': getWindowDimension('width'), 'height': getWindowDimension('height'), 'lesserValue': getWindowDimension('width')})
    }

    useEffect(() => {
        handleResponsiveCanvas()
    }, [setWindowDimensions]);

    window.addEventListener('resize', handleResize);

    const handleResponsiveCanvas = () => {
        const [ width, height ] = [ windowDimensions.width, windowDimensions.height ];
        const lesserValue = width < height ? width : height;
        const layout = (width / height) > 1 ? "landscape" : "portrait";
        if (layout === "portrait") {
            setWindowDimensions({'width': width - 20, 'height': height, 'lesserValue': lesserValue})
        } else {
            setWindowDimensions({'width': width - 200, 'height': height - 200, 'lesserValue': lesserValue - 200})
        }
    }
        
    return(
        !isLoading ? 
        <div id="resume-container">
            <Document file={data?.resumeURL} className="cv-pdf">
                <Page pageNumber={1} width={windowDimensions.lesserValue}/>
            </Document>
            {/* <a id="resume-dl-link" href={downloadResource()} download="Eliza Doyle-Resume.pdf">download me</a> */}
        </div>   
        : <div>Loading...</div>
    ) 
}