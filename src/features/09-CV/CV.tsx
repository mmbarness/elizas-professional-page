import { useEffect, useState } from "react"
import "regenerator-runtime/runtime";
import { pdfjs, Document, Page } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { useGetResumeQuery } from "../shared/sanityAPI";
import rightArrow from '../../assets/right-arrow.svg';
import { returnLayout } from "../shared/quickies";

export const CV = () => {

    const { isLoading, error, data } = useGetResumeQuery()
    
    const dimensionDict = {
        'portrait': {
            'width': (width:number) => width - 225,
            'height': (height:number) => height - 225
        },
        'landscape': {
            'width': (width:number) => width - 225,
            'height': (height:number) => height - 225
        }
    }

    const [layout, setLayout] = useState<'portrait'|'landscape'>(returnLayout())

    const [windowDimensions, setWindowDimensions] = useState({
        'width': dimensionDict[layout].width(window.innerWidth), 
        'height': dimensionDict[layout].height(window.innerHeight), 
        'lesserValue': Math.min(
            dimensionDict[layout].width(window.innerWidth), 
            dimensionDict[layout].height(window.innerHeight)
        )
    })

    const [pageNumber, setPageNumber] = useState(1);

    const incrementPageOp = () => pageNumber === 2 ? setPageNumber(1) : setPageNumber(2)

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const handleResponsiveCanvas = () => {
        const {width: widthFn, height: heightFn} = dimensionDict[layout]
        const [width, height] = [widthFn(window.innerWidth), heightFn(window.innerHeight)]
        const lesserValue = Math.min(width, height)
        setWindowDimensions({width, height, lesserValue})
    }

    useEffect(() => {
        setLayout(returnLayout())
    },[window.innerWidth, window.innerHeight])

    useEffect(() => {
        window.addEventListener('resize', handleResponsiveCanvas);
        return () => window.removeEventListener('resize', handleResponsiveCanvas);
    },[layout])
        
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