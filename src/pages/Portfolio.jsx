import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import mainContext from '../context/mainContext';
import { useEffect } from 'react';



function Details(props) {

    const { imageURL, title, type, github, hostedLink } = props.data;

    return (
        <>
            <div className='flex flex-col gap-4 bg-slate-200 hover:shadow-lg hover:shadow-slate-600 transition-all ease-in-out duration-300 rounded-lg'>

                <img src={imageURL} className='w-[640px] rounded-t-lg' />
                <div className='p-5 flex flex-col gap-3'>
                    <div className='flex gap-5 '>

                        {
                            github ? <a href={github} className='text-slate-600 hover:text-slate-800 transition-all ease-in-out duration-300' target="_blank">
                                <GitHubIcon />
                            </a> : <div></div>
                        }
                        {
                            hostedLink ? <a href={hostedLink} className='text-slate-600 hover:text-slate-800 transition-all ease-in-out duration-300' target="_blank">
                                <LinkIcon />
                            </a> : <div></div>
                        }

                    </div>
                    <div>
                        <div className='text-lg font-bold'>{title.toUpperCase()}</div>
                        <div className='font-thin text-slate-500'>{type?.toUpperCase()}</div>
                    </div>
                </div>
            </div>

        </>
    )
}


function Portfolio() {


    const context = useContext(mainContext)
    const { fetchPortfolio, portfolio } = context;

    useEffect(() => {
        fetchPortfolio();
        console.log(portfolio);
    }, [])


    return (
        <>

            <div className='bg-slate-100 h-max md:p-20 p-8 flex flex-col justify-center'>
                <div className='text-center text-4xl font-bold'>MY PORTFOLIO</div>
                <div className='pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 m-auto'>


                    {portfolio.map((data) => {
                        return (
                            <Details key={data._id} data={data} />
                        )
                    })}





                </div>

            </div>
        </>
    )
}

export default Portfolio