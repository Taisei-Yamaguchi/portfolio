import React from 'react';

const Profile = () => {
    return (
        <div className=' bg-base-100 flex flex-col items-center pl-10 pr-10'>
            <h1 className="mb-5 text-5xl font-bold">Profile</h1>
            {/* Intro */}
            <div className='flex flex-col self-start mb-20'>
                <h2 className="mb-5 text-3xl font-bold">Introduction</h2>
                <div>
                    <li>山口 泰生 (やまぐち たいせい), Taisei Yamaguchi</li>
                    <li>Backend Engineer, Frontend Enginieer, Full Stack Engineer</li>
                    <li>University of Tsukuba (graduation 2023.3)</li>
                    <li>Hobbies:Track&Filed, Weight Training, Travel, Cats</li>
                </div>
            </div>

            {/* Why? */}
            <div className='flex flex-col self-start mb-10'>
                <h2 className="mb-5 text-3xl font-bold">Why am I aspiring to be engineer?</h2>
                <div className='text-sm'>
                I have experience using programming in the laboratory to analyze experimental results, I was fascinated by its convenience. Through this experience, I learned about the field of web development and decided to pursue a career as an engineer, I decided to pursue a career as an engineer.
                </div>
            </div>

            {/* Interest,Thougt */}
            <div className='flex flex-col self-start mb-10'>
                <h2 className="mb-5 text-3xl font-bold">Interest, Thought</h2>
                <div className='text-sm'>
                Interested in developing web services that bring benefits to users, I am interested in providing easy-to-use and valuable products. I am particularly interested in back-end development, I am interested in challenging myself with advanced algorithms and data processing. AI is also of strong interest because of its usefulness.
                </div>
            </div>

            {/* Club */}
            <div className='flex flex-col self-start mb-10'>
                <h2 className="mb-5 text-3xl font-bold">Club Activity (Track & Fields)</h2>
                <div className='text-sm'>
                In club activities, I served as a photo judge for competitions in the track and field team, I also competed in the decathlon at the national championships. In addition to athletic ability, I have also developed leadership skills as a team player.
                </div>
            </div>

            {/* Lab */}
            <div className='flex flex-col self-start mb-10'>
                <h2 className="mb-5 text-3xl font-bold">Laboratory Activity</h2>
                <div className='text-sm'>
                Biology research investigated the relationship between dopamine and enteroendocrine cells in Drosophila. Developed scientific thinking skills, I had experiences that enhanced my problem-solving skills.
                </div>
            </div>

            {/* Study Abroad */}
            <div className='flex flex-col self-start mb-10'>
                <h2 className="mb-5 text-3xl font-bold">Study Abroad Experience</h2>
                <div className='text-sm'>
                To become an engineer in an unfamiliar environment in a foreign country, I put all my energy into my studies. I continued my personal growth as I was exposed to new cultures and languages.
                </div>
            </div>
        </div>
    );
};

export default Profile;
