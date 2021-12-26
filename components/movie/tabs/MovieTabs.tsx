import React from 'react'
import Tabs, { TabPane } from 'rc-tabs';
import Image from 'next/image'
import { Movie, MovieCredits } from 'lib/types';
import { MovieCredit } from '../MovieCredit';

interface MovieTabsProps {
    movie: Movie
    credits: MovieCredits
}

export const MovieTabs = ({ movie, credits }: MovieTabsProps) => {
    return (
        <Tabs defaultActiveKey="1" className='mt-24'>
            <TabPane tab="Overview" key="1">
                <div className="grid grid-cols-3 gap-10 px-4 container mx-auto mt-10 mb-10">
                    <div className='col-span-full md:col-span-1'>
                        <div className='grid grid-cols-4 md:grid-cols-2 gap-4'>
                            <span className="text-slate-400 font-medium col-span-full">Media</span>
                            {movie.images?.backdrops.splice(0, 12).map((image, index) => (
                                <div key={index.toString()} className='h-40 md:h-20 w-full md:w-26 relative rounded-lg drop-shadow-xl'>
                                    <Image
                                        alt={movie.title}
                                        objectFit='cover'
                                        className='rounded-lg'
                                        layout='fill'
                                        src={`https://image.tmdb.org/t/p/original/${image.file_path}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-2">
                        <MovieCredit credits={credits} />
                    </div>
                </div>
            </TabPane>
            <TabPane tab="Full Cast & Crew" key="2">
                Full Cast & Crew
            </TabPane>
            <TabPane tab="Opinion" key="3">
                Opinion
            </TabPane>
            <TabPane tab="Storyline" key="4">
                Storyline
            </TabPane>
            <TabPane tab="Did you know ?" key="5">
                Did you know ?
            </TabPane>
            <TabPane tab="More" key="6">
                More
            </TabPane>
        </Tabs>
    )
}
