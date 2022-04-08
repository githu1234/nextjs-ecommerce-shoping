import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart,AiFillCloseCircle,AiFillPlusCircle,AiFillMinusCircle} from 'react-icons/ai';
import {BsFillBagCheckFill} from 'react-icons/bs'
import { useRef } from 'react';

const Navbar = () => {
  const toggleCart=()=>{
    if(ref.current.classList.contains('translate-x-full'))
    {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if(!ref.current.classList.contains('translate-x-full'))
    {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }

  }
  const ref=useRef()
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center my-2 shadow-xl'>
      <div className="logo mx-5"> 
      <Link href={"/"}>
       <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
       <Image width={200} height={40} src="/footer.png"></Image>
        </a>
       </Link>

      </div>
      <div className='nav'>
        <ul className='flex items-center space-x-6 font-bold md:text-md'>
          <Link href={'/tshirts'}><a><li>Tshirts</li></a></Link>
          <Link href={'/hoodies'}><a><li>Hoodies</li></a></Link>
          <Link href={'/stickers'}><a><li>Stickers</li></a></Link>
          <Link href={'/mugs'}><a><li>Mugs</li></a></Link>
        </ul>
      </div>
      <div onClick={toggleCart} className="cart absolute right-0 top-2 mx-5 cursor-pointer">
        <AiOutlineShoppingCart className=' text-xl md:text-3xl'/>
      </div>
      <div ref={ref} className="w-72 h-full sideCart absolute top-0 right-0 bg-pink-50 px-8 py-10 transform transition-transform translate-x-full">
        <h2 className="font-bold text-xl">Shopping cart</h2>
        <span onClick={toggleCart} className="absolute top-5 right-6 text-2xl cursor-pointer text-pink-500 "><AiFillCloseCircle/></span>
        <ol className='list-decimal font-semibold' >
          <li>
            <div className='item flex my-3'>
            <div className='w-2/3 font-semibold '>Tshirt-Wear the code</div>
            <div className='flex font-semibold items-center justify-center w-1/3 text-lg' ><AiFillMinusCircle className='cursor-pointer text-pink-500'/><span className='mx-2 text-sm'>1</span><AiFillPlusCircle className='cursor-pointer text-pink-500' /></div>
            </div>
          </li>
          <li>
            <div className='item flex my-3'>
            <div className='w-2/3 font-semibold '>Tshirt-Wear the code</div>
            <div className='flex font-semibold items-center justify-center w-1/3 text-lg' ><AiFillMinusCircle className='cursor-pointer text-pink-500'/><span className='mx-2 text-sm'>1</span><AiFillPlusCircle className='cursor-pointer text-pink-500' /></div>
            </div>
          </li>
          <li>
            <div className='item flex my-3'>
            <div className='w-2/3 font-semibold '>Tshirt-Wear the code</div>
            <div className='flex font-semibold items-center justify-center w-1/3 text-lg' ><AiFillMinusCircle className='cursor-pointer text-pink-500'/><span className='mx-2 text-sm'>1</span><AiFillPlusCircle className='cursor-pointer text-pink-500' /></div>
            </div>
          </li>
          <li>
            <div className='item flex my-3'>
            <div className='w-2/3 font-semibold '>Tshirt-Wear the code</div>
            <div className='flex font-semibold items-center justify-center w-1/3 text-lg' ><AiFillMinusCircle className='cursor-pointer text-pink-500'/><span className='mx-2 text-sm'>1</span><AiFillPlusCircle className='cursor-pointer text-pink-500' /></div>
            </div>
          </li>
          <li>
            <div className='item flex my-3'>
            <div className='w-2/3 font-semibold '>Tshirt-Wear the code</div>
            <div className='flex font-semibold items-center justify-center w-1/3 text-lg' ><AiFillMinusCircle className='cursor-pointer text-pink-500'/><span className='mx-2 text-sm'>1</span><AiFillPlusCircle className='cursor-pointer text-pink-500' /></div>
            </div>
          </li>
          <li>
            <div className='item flex my-3'>
            <div className='w-2/3 font-semibold '>Tshirt-Wear the code</div>
            <div className='flex font-semibold items-center justify-center w-1/3 text-lg' ><AiFillMinusCircle className='cursor-pointer text-pink-500'/><span className='mx-2 text-sm'>1</span><AiFillPlusCircle className='cursor-pointer text-pink-500' /></div>
            </div>
          </li>
          <li>
            <div className='item flex my-3'>
            <div className='w-2/3 font-semibold '>Tshirt-Wear the code</div>
            <div className='flex font-semibold items-center justify-center w-1/3 text-lg' ><AiFillMinusCircle className='cursor-pointer text-pink-500'/><span className='mx-2 text-sm'>1</span><AiFillPlusCircle className='cursor-pointer text-pink-500' /></div>
            </div>
          </li>
        </ol>
        <div className='flex'>
        <button className=" cursor-pointer flex  mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className='m-1'/> Checkout</button>
        <button className=" cursor-pointer flex mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"> Clear Cart</button>
        </div>
       
        </div>
    </div>
  )
}

export default Navbar