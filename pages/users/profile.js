import { useState } from "react"
import UserLayout from "../../layouts/UserLayout"
import ShowStarAndTotalReviewer, { ShowComments } from "../../components/Review/review"
import { ImageSide } from "../../components/ImageSlide/image"

const Profile = () => {



    const [userProfile, setUserProfile] = useState({
        firstName: 'พุทธพงษ์',
        lastName: 'เข็มเจริญ',
        phoneNumber: '094-4396999',
        gender: 'Male',
        email: "pk9business168@gmail.com",
        imageUrl: "https://scontent.furt3-1.fna.fbcdn.net/v/t1.6435-9/175866357_3732701286858869_7305063358935137303_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEffsYPVFDg0rZlfdSaIZqe-IEzDoXhrVz4gTMOheGtXMsWQjs13XPK-VzpIIG8s9CtCdDF_C4K41xMoH0VExjk&_nc_ohc=9utvAYwaYOoAX-dSgKQ&_nc_oc=AQlfjyh2Jwc6ge_7RskF8KmAxkBxEfsz9fQZTRk54MBQHZ-vAIzbtpnemJqGo2uVgEYNH7pS4K1bhtnNDeJg3GNO&_nc_ht=scontent.furt3-1.fna&oh=aa06a023ddb9b5774de861ff99af68fb&oe=60C9FAED",
        imageList: [
            "https://scontent.furt3-1.fna.fbcdn.net/v/t1.6435-9/175866357_3732701286858869_7305063358935137303_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEffsYPVFDg0rZlfdSaIZqe-IEzDoXhrVz4gTMOheGtXMsWQjs13XPK-VzpIIG8s9CtCdDF_C4K41xMoH0VExjk&_nc_ohc=9utvAYwaYOoAX-dSgKQ&_nc_oc=AQlfjyh2Jwc6ge_7RskF8KmAxkBxEfsz9fQZTRk54MBQHZ-vAIzbtpnemJqGo2uVgEYNH7pS4K1bhtnNDeJg3GNO&_nc_ht=scontent.furt3-1.fna&oh=aa06a023ddb9b5774de861ff99af68fb&oe=60C9FAED",
            "https://scontent.furt3-1.fna.fbcdn.net/v/t1.6435-9/118909619_3113643652097972_8687353467477841264_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=174925&_nc_eui2=AeGuXlHFHqHuuAAhGC8YrVvn1aqIws_SNObVqojCz9I05js0YXqENr54kVvwqQCVvbj9Dr75shpuLxGR73uJZQTt&_nc_ohc=f1KyscMXZQ0AX-wKlr4&_nc_oc=AQlk1nQUftgagkSA3Loxdld9CVaD90uSl-dHJPzUX2LtkilZLf-j-pucyMfJFZdkO6q-XPIZgbgCbRxcSzm5bLQJ&_nc_ht=scontent.furt3-1.fna&oh=221a87e18577a21cdc02aa574419e2fe&oe=60CD78C3",
            "https://scontent.furt3-1.fna.fbcdn.net/v/t1.6435-9/91060217_2688504684611873_7867164992779321344_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=174925&_nc_eui2=AeFij_A9boGhkFIL9rEL1Iq0oCrNCUy5DbCgKs0JTLkNsCv1e8K7Tiqt6KOHKJDvJtqDO4j2tn7nj98B_wYh--OV&_nc_ohc=urXGqUYY_oQAX8RGllR&_nc_oc=AQmxgUlRA9ap9OaI5qDVe8tMnvkYBC36PnltHIuV0Xw2tIRgcNV_jo0_UhzXqaO5WFH6-nXGj-iYiPhpCcOq5VeV&_nc_ht=scontent.furt3-1.fna&oh=6b3b2242f66498947a0030eea0d5a05a&oe=60CB7E32",
        ],
        briefBiography: `เน้นความเข้าใจ นำไปใช้ได้จริง
        วางแผนการสอนโดยอิงจากตัวนักเรียน
        (สามารถคุยกันได้)
        ปัจจุบันเรียนคณะวิทยาศาสตร์ ภาควิชาวิทยาการคอมพิวเตอร์
        สอนเขียนโปรแกรมพื้นฐาน และจากการใช้คณิตศาสตร์`,
        totalStar: 5,
        commmentsInfo: [
            {
                name: "oTTO",
                totalStar: 5,
                reviewedAt: "2021-05-20T13:18:00+07:00",
                comment: `
                ครูน่ารัก 
                สอนดี
                เรียนสนุกเข้าใจง่ายมากครับ
                `
            },
            {
                name: "MANAJA",
                totalStar: 5,
                reviewedAt: "2021-04-30T13:18:00+07:00",
                comment: "เรียนสนุก ลุกนั่ง สบายครับ"
            }


        ]

    })

    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        // var slides = document.getElementsByClassName("mySlides");
        // var dots = document.getElementsByClassName("description");
        // var captionText = document.getElementById("caption");
        // if (n > slides.length) {
        //     slideIndex = 1
        // }
        // if (n < 1) {
        //     slideIndex = slides.length
        // }
        // for (i = 0; i < slides.length; i++) {
        //     slides[i].style.display = "none";
        // }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" opacity-100", "");
        // }
        // slides[slideIndex - 1].style.display = "block";
        // dots[slideIndex - 1].className += " opacity-100";
        // captionText.innerHTML = dots[slideIndex - 1].alt;
    }

    return (
        <UserLayout>
            <div className="container mx-auto my-5 p-5 ">
                <div className="md:flex no-wrap md:-mx-2 ">
                    <div className="w-full md:w-3/12 md:mx-2">
                        <div className="bg-white p-3 border-t-4 border-green-400">
                            <div className="image overflow-hidden">
                                <img className="h-auto w-full mx-auto"
                                    src={userProfile.imageUrl}
                                    alt="">
                                </img>
                            </div>
                            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{userProfile.firstName} {userProfile.lastName}</h1>
                            {/* <h3 className="text-gray-600 font-lg text-semibold leading-6">Owner at Her Company Inc.</h3> */}
                            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">{userProfile.brief_biography}</p>
                            <ul
                                className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                <li key={"user_status"} className="flex items-center py-3">
                                    <span>User Status</span>
                                    <span className="ml-auto"><span
                                        className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                                </li>
                                <li key={"member_since"} className="flex items-center py-3">
                                    <span>Member since</span>
                                    <span className="ml-auto">Nov 07, 2016</span>
                                </li>
                                <li key={"review"} className="flex items-center py-3 ">
                                    <span>Review</span>
                                    <div className="flex items-center ml-auto ">
                                        {ShowStarAndTotalReviewer(userProfile.totalStar, userProfile.commmentsInfo?.length)}
                                    </div>

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
                        <div className="my-4"></div>
                        {/* <!-- END About Section --> */}
                        {/* <!-- Biography --> */}
                        <div className="bg-white p-3 shadow-sm rounded-sm">
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinecap="round" strokeWidth="2"
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span className="tracking-wide">แนะนำตัว</span>
                            </div>
                            <div>
                                <span>
                                    {userProfile.briefBiography}
                                </span>
                            </div>
                        </div>
                        <div className="my-4"></div>
                        {/* <!--  END Biography --> */}
                        {/* <!--   Gallery --> */}
                        <div className="bg-white p-3 shadow-sm rounded-sm">
                            <h2 className="text-4xl text-center tracking-wide font-extrabold font-serif leading-loose mb-2">Gallery</h2>
                            <div>
                                {ImageSide(userProfile.imageList)}
                            </div>
                        </div>
                        <div className="my-4"></div>
                        {/* <!--  END Gallery --> */}
                        {/* <!--   Reviewer & Comment --> */}
                        <div className="bg-white p-3 shadow-sm rounded-sm">
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                {/* <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinecap="round" strokeWidth="2"
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg> */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                                <span className="tracking-wide">Reviewer</span>
                            </div>
                            {ShowComments(userProfile.commmentsInfo)}
                        </div>
                        {/* <!--  END Reviewer & Comment --> */}

                    </div>


                </div>
            </div>
        </UserLayout>


    )
}

export default Profile