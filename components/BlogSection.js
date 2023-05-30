import React from 'react'

const BlogSection = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">BLOGS</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">CHECK OUR TOP BLOGS</p>
    </div>
                    <div className="flex flex-wrap -mx-4 -my-8">
                        <div className="py-8 px-4 lg:w-1/3">
                            <div className="h-full flex items-start">
                                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                    <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                                    <span className="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                                </div>
                                <div className="flex-grow pl-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">CATEGORY</h2>
                                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">Carlo Scarpa / Sekiya Masaaki</h1>
                                    <p className="leading-relaxed mb-5">Traces of architecture in the world of a Japanese photographer More...</p>
                                    <a className="inline-flex items-center">
                                        <img alt="blog" src="https://dummyimage.com/103x103" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
                                            <span className="flex-grow flex flex-col pl-3">
                                                <span className="title-font font-medium text-gray-900">Alper Kamu</span>
                                            </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="py-8 px-4 lg:w-1/3">
                            <div className="h-full flex items-start">
                                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                    <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                                    <span className="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                                </div>
                                <div className="flex-grow pl-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">CATEGORY</h2>
                                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">Light Stalking</h1>
                                    <p className="leading-relaxed mb-5">Photographers know that lighting is key for any successful photo, which More...</p>
                                    <a className="inline-flex items-center">
                                        <img alt="blog" src="https://dummyimage.com/102x102" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
                                            <span className="flex-grow flex flex-col pl-3">
                                                <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
                                            </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="py-8 px-4 lg:w-1/3">
                            <div className="h-full flex items-start">
                                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                    <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                                    <span className="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                                </div>
                                <div className="flex-grow pl-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">CATEGORY</h2>
                                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">Monovisions</h1>
                                    <p className="leading-relaxed mb-5">Black and white photography lovers will want to bookmark Monovisions. Also known More...</p>
                                    <a className="inline-flex items-center">
                                        <img alt="blog" src="https://dummyimage.com/101x101" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
                                            <span className="flex-grow flex flex-col pl-3">
                                                <span className="title-font font-medium text-gray-900">Henry Letham</span>
                                            </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogSection