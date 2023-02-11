import { useEffect, useMemo, useRef, useState } from "react"
import "regenerator-runtime/runtime";
import { pdfjs, Document, Page } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { useGetResumeQuery } from "../shared/sanityAPI";
import { returnLayout } from "../shared/quickies";
import { match, P } from "ts-pattern";

export const CV = () => {

    const { isLoading, error, data } = useGetResumeQuery()

    const resumeContainerRef = useRef<HTMLDivElement>(null)
    
    const dimensionDict = useMemo(() => ({
        'portrait': {
            'width': (width:number) => width - 225,
            'height': (height:number) => height - 225
        },
        'landscape': {
            'width': (width:number) => width - 225,
            'height': (height:number) => height - 225
        }
    }),[]);

    const [layout, setLayout] = useState<'portrait'|'landscape'>(returnLayout())

    const [windowDimensions, setWindowDimensions] = useState({
        'width': dimensionDict[layout].width(window.innerWidth), 
        'height': dimensionDict[layout].height(window.innerHeight), 
        'lesserValue': Math.min(
            dimensionDict[layout].width(window.innerWidth), 
            dimensionDict[layout].height(window.innerHeight)
        )
    })

    useEffect(() => {
        if (resumeContainerRef) {
            const {current: resumeContainer} = resumeContainerRef
            const {containerWidth, containerHeight} = match({width: resumeContainer?.clientWidth, height: resumeContainer?.clientHeight})
                .with({
                    width: P.number,
                    height: P.number
                }, ({width, height}) => ({containerWidth: width, containerHeight: height}))
                .with(P.union(
                    ({width: P.nullish, height: P.nullish}),
                    ({width: P.nullish, height: P.number}),
                    ({width: P.number, height: P.nullish})
                ), (incompleteData) => ({containerWidth: 0, containerHeight: 0}))
                .run();
            setWindowDimensions({width: containerWidth, height: containerHeight, lesserValue: containerHeight})
            console.log({resumeContainer, containerWidth, windowDimensions})
        }    
    }, [resumeContainerRef, windowDimensions])

    const [pageNumber, setPageNumber] = useState(1);

    const incrementPageOp = () => pageNumber === 2 ? setPageNumber(1) : setPageNumber(2)

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflarej.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    useEffect(() => {
        setLayout(returnLayout())
    },[])
    
    useEffect(() => {
        const handleResponsiveCanvas = () => {
            const {width: widthFn, height: heightFn} = dimensionDict[layout]
            const [width, height] = [widthFn(window.innerWidth), heightFn(window.innerHeight)]
            const lesserValue = Math.min(width, height)

            const {current: resumeContainer} = resumeContainerRef
            const {containerWidth, containerHeight} = match({width: resumeContainer?.clientWidth, height: resumeContainer?.clientHeight})
                .with({
                    width: P.number,
                    height: P.number
                }, ({width, height}) => ({containerWidth: width, containerHeight: height}))
                .with(P.union(
                    ({width: P.nullish, height: P.nullish}),
                    ({width: P.nullish, height: P.number}),
                    ({width: P.number, height: P.nullish})
                ), (incompleteData) => ({containerWidth: 0, containerHeight: 0}))
                .run();
            
            setWindowDimensions({width, height, lesserValue: containerHeight})
            console.log({resumeContainer, containerWidth, windowDimensions})
        }
        window.addEventListener('resize', handleResponsiveCanvas);
        return () => window.removeEventListener('resize', handleResponsiveCanvas);
    },[dimensionDict, layout])
        
    return(
        !isLoading ? 
        <div id="resume-container" ref={resumeContainerRef}>
            <Document file={data?.resumeURL} className="cv-pdf">
                <Page pageNumber={pageNumber} height={windowDimensions.lesserValue} scale={1.25}/>
            </Document>
            {/* <svg id="resume-pg-nav" onClick={() => incrementPageOp()} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg> */}
            <a id="resume-dl-link" href={data?.resumeURL} download="Eliza Doyle-Resume.pdf" target="_blank" rel="noopener noreferrer">download</a>
        </div>  
        : <div>Loading...</div>
    ) 
}