import React from 'react'
import Link from 'next/link'


const UserBar = () => {
    return (
        <div className="bg-white">
          <nav className="flex px-6  md:shadow-lg item-center">
            <div className="flex md:inline-flex p-4 text-lg font-bold">
              <h1 className="font-bold text-center text-4xl text-yellow-500">Friendly<span className="text-blue-500">Kru</span></h1>
            </div>
            <ul className="flex p-4 items-center hover:bg-gray-50">
              <Link href="/users/profile">ตั้งค่าโปรไฟล์</Link>
            </ul>
            <ul className="flex p-4 items-center hover:bg-gray-50">
              <Link href="/class/search"><a>มองหานักเรียน</a></Link>
            </ul>
            <ul className="flex p-4 items-center hover:bg-gray-50">
              <Link href="/users/signup"><a>ข้อความ</a></Link>
            </ul>
            <ul className="flex  p-4 items-center  hover:bg-gray-50">
              <Link href="/users/login"><a>ช่วยเหลือ</a></Link>
            </ul>
            {/* <ul>
                <a class="flex md:inline-flex p-4 items-center hover:bg-gray-50" href="#">
                  คลาสเรียน
                </a>
              </ul>
              <ul>
                <a class="flex md:inline-flex p-4 items-center hover:bg-gray-50" href="/login" onClick={redirectToLoginPage}>
                  สมัครสอนพิเศษ
                </a>
              </ul> */}
          </nav>
        </div>
      )
    
}

export default UserBar