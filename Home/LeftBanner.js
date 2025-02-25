'use client'

import React from 'react';
import Image from 'next/image';
import Button from '../General/Button';


const LeftBanner = () => {
  return (
    <div className="md:w-2/5 my-2">
                   
                    <div className="h-full p-4 rounded-lg text-white relative overflow-hidden">
                        {/* Background image with Next.js Image */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/mainBack.png"
                                alt="Background"
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                        </div>
                        {/* Content overlay */}
                        <div className="relative z-10">
                            <h2 className="font-semibold text-4xl mb-4">
                                Make your Streaming usage count!
                            </h2>
                            <p className="text-xl mb-8">
                                The Nielsen Media Streaming panel represents streaming usage in our country.
                            </p>
                            <div className="text-center mb-5">
                                <Button theme="white" width="120px">Get Started</Button>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default LeftBanner
