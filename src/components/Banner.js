const Banner = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 banner">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none primary-color">
                            Let us handle
                            <br className="hidden md:block" />
                            your next{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                destination
                            </span>
                        </h2>
                        <p className="text-base text-slate-100 md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae. explicabo.
                        </p>
                    </div>
                    <div>
                        <a
                            href="/"
                            className="inline-flex items-center justify-center w-44 h-12 px-6 font-medium tracking-wide text-slate-100 transition duration-200 rounded-full shadow-md primary-bg focus:shadow-outline focus:outline-none"
                            aria-label="Start Shopping"
                            title="Start Shopping"
                        >
                            Start Shopping
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center -mx-4 lg:pl-8">
                    <div className="flex flex-col items-end px-3">
                        <img
                            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                            src="b1.png"
                            alt=""
                        />
                        <img
                            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                            src="b3.png"
                            alt=""
                        />
                    </div>
                    <div className="px-3">
                        <img
                            className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                            src="b2.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;