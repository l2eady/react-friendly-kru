import { useState } from "react"
import UserLayout from "../../layouts/UserLayout"
import GenerateStartByLvl from "../../components/Review/review"
const Profile = () => {

    const [userProfile, setUserProfile] = useState({
        firstName: 'พุทธพงษ์',
        lastName: 'เข็มเจริญ',
        phoneNumber: '094-4396999',
        gender: 'Male',
        email: "pk9business168@gmail.com",
        briefBiography: `เน้นความเข้าใจ นำไปใช้ได้จริง
        วางแผนการสอนโดยอิงจากตัวนักเรียน
        (สามารถคุยกันได้)
        ปัจจุบันเรียนคณะวิทยาศาสตร์ ภาควิชาวิทยาการคอมพิวเตอร์
        สอนเขียนโปรแกรมพื้นฐาน และจากการใช้คณิตศาสตร์`,
        totalReviewer: 10,
        startLevel: 5,


    })


    return (
        <UserLayout>
            <div className="container mx-auto my-5 p-5">
                <div className="md:flex no-wrap md:-mx-2 ">
                    <div className="w-full md:w-3/12 md:mx-2">
                        <div className="bg-white p-3 border-t-4 border-green-400">
                            <div className="image overflow-hidden">
                                <img className="h-auto w-full mx-auto"
                                    src="https://scontent.furt3-1.fna.fbcdn.net/v/t1.6435-9/175866357_3732701286858869_7305063358935137303_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEffsYPVFDg0rZlfdSaIZqe-IEzDoXhrVz4gTMOheGtXMsWQjs13XPK-VzpIIG8s9CtCdDF_C4K41xMoH0VExjk&_nc_ohc=9utvAYwaYOoAX-dSgKQ&_nc_oc=AQlfjyh2Jwc6ge_7RskF8KmAxkBxEfsz9fQZTRk54MBQHZ-vAIzbtpnemJqGo2uVgEYNH7pS4K1bhtnNDeJg3GNO&_nc_ht=scontent.furt3-1.fna&oh=aa06a023ddb9b5774de861ff99af68fb&oe=60C9FAED"
                                    alt="">
                                </img>
                            </div>
                            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{userProfile.firstName} {userProfile.lastName}</h1>
                            {/* <h3 className="text-gray-600 font-lg text-semibold leading-6">Owner at Her Company Inc.</h3> */}
                            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">{userProfile.brief_biography}</p>
                            <ul
                                className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                <li className="flex items-center py-3">
                                    <span>User Status</span>
                                    <span className="ml-auto"><span
                                        className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                                </li>
                                <li className="flex items-center py-3">
                                    <span>Member since</span>
                                    <span className="ml-auto">Nov 07, 2016</span>
                                </li>
                                <li className="flex items-center py-3 ">
                                    <span>Review</span>
                                    <div className="flex items-center ml-auto ">
                                    {GenerateStartByLvl(userProfile.startLevel)}
                                        {/* <svg className="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                        <svg className="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                        <svg className="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                        <svg className="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                        <svg className="mx-1 w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg> */}
                                    </div>
                                    {/* <span className="ml-auto">
                                        <svg className="h-6 w-6 text-yellow-300" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>
                                    </span>
                                    <span>
                                        <svg className="h-6 w-6 text-yellow-300" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>
                                    </span>
                                    <span>
                                        <svg className="h-6 w-6 text-yellow-300" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>
                                    </span>
                                    <span>
                                        <svg className="h-6 w-6 text-yellow-300" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>
                                    </span>
                                    <span>
                                        <svg className="h-6 w-6 text-yellow-300" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>
                                    </span> */}
                                    <span>
                                        <p>({userProfile.totalReviewer} รีวิว)</p>
                                    </span>


                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-9/12 mx-2 h-64">
                        {/* <!-- About Section --> */}
                        <div className="bg-white p-3 shadow-sm rounded-sm">
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                <span clas="text-green-500">
                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinecap="round" strokeWidth="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>
                                <span className="tracking-wide">About</span>
                            </div>
                            <div className="text-gray-700">
                                <div className="grid md:grid-cols-2 text-sm">
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">ชื่อ</div>
                                        <div className="px-4 py-2">{userProfile.firstName}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">สกุล</div>
                                        <div className="px-4 py-2">{userProfile.lastName}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">เพศ</div>
                                        <div className="px-4 py-2">{userProfile.gender}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">เบอร์โทรศัพท์</div>
                                        <div className="px-4 py-2">{userProfile.phoneNumber}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">อีเมล</div>
                                        <div className="px-4 py-2">
                                            <a className="text-blue-800" href={`mailto:${{ userProfile }.email}`}>{userProfile.email}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- END About Section --> */}

                        <div className="my-4"></div>

                        {/* <!-- Biography --> */}
                        <div className="bg-white p-3 shadow-sm rounded-sm">
                            <div className="grid grid-cols-1">
                                <div>
                                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                        <span clas="text-green-500">
                                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinecap="round" strokeWidth="2"
                                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </span>
                                        <span className="tracking-wide">แนะนำตัว</span>
                                    </div>
                                    <div>
                                        <span>
                                            {userProfile.briefBiography}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>


    )
}

export default Profile