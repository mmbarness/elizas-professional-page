import { useEffect, useState } from "react"
import "regenerator-runtime/runtime";
import { pdfjs, Document, Page } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { useGetResumeQuery } from "../shared/sanityAPI";
import rightArrow from '../../assets/right-arrow.svg';

export const CV = () => {

    const { isLoading, error, data } = useGetResumeQuery()

    const [pageNumber, setPageNumber] = useState(1);

    const incrementPageOp = () => pageNumber === 2 ? setPageNumber(1) : setPageNumber(2)

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const getWindowDimension = (whichSide: string) => ( whichSide === 'width' ? window.innerWidth-50 : window.innerHeight-50)
    
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
                <Page pageNumber={pageNumber} width={windowDimensions.lesserValue}/>
            </Document>
            <svg id="resume-pg-nav" onClick={() => incrementPageOp()} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
            <a id="resume-dl-link" href={data?.resumeURL} download="Eliza Doyle-Resume.pdf" target="_blank" rel="noopener noreferrer">download</a>
        </div>  
        : <div>Loading...</div>
    ) 
}