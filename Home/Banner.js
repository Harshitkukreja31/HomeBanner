'use client'

import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'
const Banner = () => {
    return (
        <section className="py-3 px-3 text-center container mx-auto">
            <div className="flex flex-col md:flex-row md:space-x-5 md:justify-around">
                {/* Left Banner Panel */}
                <LeftBanner/>
                {/* Right Login Panel */}
                <RightBanner/>
            </div>
        </section>
    )
}

export default Banner
