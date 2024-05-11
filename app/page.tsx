'use client'

import Image from 'next/image'
import { IoArrowDownOutline as Arrow } from "react-icons/io5"
import { useEffect } from 'react'
import classnames from 'classnames'
import { useState } from 'react'

const mainContainer = 'flex flex-wrap justify-around items-center flex-row h-[100vh] m-6'
const rightContainer = 'flex justify-center items-center outline outline-[5px] outline-[#494949] bg-slate-600 h-[100vh] flex-1 rounded-3xl m-1 overflow-hidden'
const leftContainer = 'flex flex-col bg-white h-[100vh] flex-1 grow-[1.5] rounded-3xl m-1 mr-12'
const leftDiscover = 'flex flex-1 justify-center items-center outline outline-[5px] outline-[#B26A36] text-9xl font-bold grow-[2] bg-[#FF9B52] h-[100vh] rounded-3xl p-12 mb-12'
const leftBottomContainer = 'flex flex-1 grow-[1] bg-white h-[100vh]'
const leftExplore = 'flex flex-1 text-[164px] outline outline-[5px] outline-[#690000] text-white justify-center items-center grow-[2.5] bg-[#9F0000] rounded-3xl mr-12'
const leftArrow = 'flex flex-1 justify-center items-center outline outline-[5px] outline-[#110043] bg-[#17005A] rounded-3xl'
const arrow = <Arrow color='white' size='256'/>
const img = <Image className='object-cover' src='/image.jpg' width={720} height={650} alt='image'/>

const page = () => {
  return (
    <>
      <div className={mainContainer}>
        <div className={leftContainer}>
          <div className={leftDiscover}>
            DISCOVER THE WORLD OF 3D PRINTED MODELS
          </div>
          <div className={leftBottomContainer}>
            <div className={leftExplore}>
              Explore
            </div>
            <button className={leftArrow}>
              {arrow}
            </button>
          </div>
        </div>
        <div className={rightContainer}>
          {img}
        </div>
      </div>
    </>
  )
}

export default page