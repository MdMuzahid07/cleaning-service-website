import React from 'react';
import bucketGirl from '../../assets/images/bucketgirl.png';

const Landing = () => {
    return (
        <div>
            <div class="hero h-[60] bg-accent mt-20">
                <div class="hero-content flex-col lg:flex-row">
                    <div data-aos="fade-right">
                        <p className='text-2xl'>Best Quality</p>
                        <h1 class="text-5xl font-bold">Professional Cleaning Service</h1>
                        <p class="py-6 max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quam suscipit in aspernatur molestiae delectus vel qui ullam officiis tenetur, voluptatum, dolorum dignissimos maxime! Molestias porro maxime amet velit corrupti voluptatem animi suscipit iusto, hic enim quos pariatur fuga itaque obcaecati rem omnis ab fugiat assumenda a illo impedit incidunt.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                    <div className='h-[60]'>
                        <img src={bucketGirl} alt="" class="h-full" />
                    </div>
                </div>
            </div>
            <div className='z-50 relative'>
                <div className='rounded-2xl mx-auto bg-black-500 shadow-lg mt-[-50px] bg-neutral p-10 w-5/6'>
                    <h1 className='text-2xl mb-5'>Get Free Estimate</h1>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3'>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    </div>
                    <button className='btn btn-primary mt-5'>Request A Quote</button>
                </div>
            </div>
        </div>
    );
};

export default Landing;