import { Title } from '@mui/icons-material';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import ContactFormRdWr from '../components/ContactFormRdWr';

function Watch() {

    const location = useLocation();
    const { data } = location.state;

    const getAttrs = (iframeTag) => {
        var doc = document.createElement('div');
        doc.innerHTML = iframeTag;

        const iframe = doc.getElementsByTagName('iframe')[0];
        return [].slice
            .call(iframe.attributes)
            .reduce((attrs, element) => {
                attrs[element.name] = element.value;
                return attrs;
            }, {});
    }


    // useEffect(() => {
    //     console.log(data);
    // }, [])


    return (
        <>

            <div className='bg-slate-100 py-10 px-5 lg:py-20'>

                <div className='h-max w-full md:w-[80%] lg:w-[60%] mx-auto  '>
                    <div className='w-full bg-white'>

                        <iframe className='w-full h-[210px] sm:h-[320px] md:h-[390px] lg:h-[430px] rounded-lg shadow-lg' {...getAttrs(data.videoLink)} />

                        <div className='p-5'>

                            <div className='text-lg md:text-xl lg:text-3xl font-bold font-sans my-6 p-5 bg-blue-50 border-l-[6px] border-blue-900 text-blue-900'>{data.title}</div>
                            <div className='flex gap-5 text-xs my-5 p-2 text-slate-500'>
                                <span>By : <span className='text-slate-400'>{data?.authorName}</span></span>
                                <span>Date : <span className='text-slate-400'>1 January 2023</span></span>
                            </div>

                        </div>
                    </div>
                    <ContactFormRdWr />
                </div>
            </div>

        </>
    )
}

export default Watch