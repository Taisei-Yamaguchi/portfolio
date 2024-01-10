import React from 'react';
import { NavLink } from 'react-router-dom';

const Deliverables = () => {
    return (
        <div className=' bg-base-100 flex flex-col items-center'>
        <h1 className="mb-5 text-5xl font-bold">Deliverables</h1>
        <div className='bg-base-100 flex flex-wrap justify-center items-between'>
            {/* deliverable1 */}
            <div className="card w-96 bg-base-100 shadow-xl mt-4 mr-3">
                <div className="card-body">
                    <h2 className="card-title">
                        <a className='link link-hover' href='https://github.com/Taisei-Yamaguchi/Exercise-Meal-Manage-App' target='_blank'>EMMA with Pet</a>
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Python</div> 
                        <div className="badge badge-outline">Django</div>
                        <div className="badge badge-outline">Javascript</div>
                        <div className="badge badge-outline">React</div>
                        <div className="badge badge-outline">PostgreSQL</div>
                    </div>
                </div>

                <figure onClick={()=>document.getElementById('my_modal_emma').showModal()}>  
                    <img className='h-72' src="/images/emma/exercise-cals.png" alt="emma" />
                    <img className='h-72' src="/images/emma/meal-pfc.png" alt="emma" />
                </figure>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_emma" className="modal">
                <div className="modal-box h-2/3">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h3 className="font-bold text-lg">EMMA with Pet (2023.11 ~ 2024.1)</h3>
                        <div className='flex flex-col'>
                        <a target='_blank' href='https://github.com/Taisei-Yamaguchi/Exercise-Meal-Manage-App' className='link'>GitHub</a>
                        <a target='_blank' href='https://emma.emmapet.net/' className='link'>App Link</a>
                        </div>
                    <p className="py-4">EMMA is a project designed to accurately and objectively understand the balance of calories and nutrients related to exercise, diet, and daily life. It aims to provide users with effective support for body transformation, diet, health maintenance, bulking, cutting, and other goals.
                    </p>
                    <img className='w-3/4' src="/images/emma/exercise-cals.png" alt="emma" />
                    <img className='w-3/4' src="/images/emma/meal-pfc.png" alt="emma" />
                    <img className='w-3/4' src="/images/emma/dashboard.png" alt="emma" />
                    <img className='w-3/4' src="/images/emma/user_info-cals-graph.png" alt="emma" />
                </div>
                </dialog>
            </div>


            {/* deliverable2 */}
            <div className="card w-96 bg-base-100 shadow-xl mt-4 mr-3">
                <div className="card-body">
                    <h2 className="card-title">
                        <a className='link link-hover' href='https://github.com/Taisei-Yamaguchi/oop-final-Drag-n-Drop' target='_blank'>Drag-n-Drop</a>
                    </h2>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">HTML</div> 
                        <div className="badge badge-outline">CSS</div>
                        <div className="badge badge-outline">Javascript</div>
                        <div className="badge badge-outline">Typescript</div>
                    </div>
                </div>

                <figure onClick={()=>document.getElementById('my_modal_oop_final').showModal()}>  
                    <img src='/images/oop-final.png' alt='Drag-n-Drop'></img>
                </figure>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_oop_final" className="modal">
                <div className="modal-box h-2/3">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h3 className="font-bold text-lg">OOP Final Project: Drag-n-Drop (2023.10)</h3>
                        <div className='flex flex-col'>
                        <a target='_blank' href='https://github.com/Taisei-Yamaguchi/oop-final-Drag-n-Drop' className='link'>GitHub</a>
                        </div>
                    <p className="py-4">This is a model site for Project management created for a school project. It was developed with an object-oriented approach in mind.</p>
                        <video src='/images/OOP-Final.mov' alt='Drag-n-Drop' autoPlay loop muted></video>
                    </div>
                </dialog>
            </div>

            {/* deliverable3 */}
            <div className="card w-96 bg-base-100 shadow-xl mt-4 mr-3">
                <div className="card-body">
                    <h2 className="card-title">
                        <a className='link link-hover' href='https://github.com/Taisei-Yamaguchi/oop-final-ToDoList/tree/main' target='_blank'>ToDoList</a>
                    </h2>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">HTML</div> 
                        <div className="badge badge-outline">CSS</div>
                        <div className="badge badge-outline">Javascript</div>
                        <div className="badge badge-outline">Typescript</div>
                    </div>
                </div>

                <figure onClick={()=>document.getElementById('my_modal_oop_asignment').showModal()}>  
                    <img src='/images/oop-todolist.png' alt='ToDoList'></img>
                </figure>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_oop_asignment" className="modal">
                <div className="modal-box h-2/3">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h3 className="font-bold text-lg">OOP Assignment: ToDoList (2023.10)</h3>
                        <div className='flex flex-col'>
                        <a target='_blank' href='https://github.com/Taisei-Yamaguchi/oop-final-ToDoList/tree/main' className='link'>GitHub</a>
                        </div>
                    <p className="py-4">
                    This is a model site for ToDoList created for a school project. It was developed with an object-oriented approach in mind.
                    </p>
                    <video src='/images/ToDoList.mov' alt='ToDoList' loop autoPlay muted></video>
                    </div>
                </dialog>
            </div>

            {/* deliverable4 */}
            <div className="card w-96 bg-base-100 shadow-xl mt-4 mr-3">
                <div className="card-body">
                    <h2 className="card-title">
                        <a className='link link-hover' href='https://github.com/Taisei-Yamaguchi/BananaDetect_FlaskApp1' target='_blank'>Banana AI Flask</a>
                    </h2>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Python</div> 
                        <div className="badge badge-outline">Flask</div>
                        <div className="badge badge-outline">pytorch</div>
                        <div className="badge badge-outline">JupiterNotebook</div>
                        <div className="badge badge-outline">Javascript</div>
                        <div className="badge badge-outline">JQuery</div>
                        <div className="badge badge-outline">HTML</div>
                        <div className="badge badge-outline">CSS</div>
                    </div>
                </div>

                <figure onClick={()=>document.getElementById('my_modal_banana_ai').showModal()}>  
                    <img src='/images/banana_application2.png' alt='Banana AI'></img>
                </figure>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_banana_ai" className="modal">
                <div className="modal-box h-2/3">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h3 className="font-bold text-lg">Banana AI Flask (2023.8 ~ 2023.9)</h3>
                        <div className='flex flex-col'>
                        <a target='_blank' href='https://github.com/Taisei-Yamaguchi/BananaDetect_FlaskApp1' className='link'>GitHub (Flask App)</a>
                        <a target='_blank' href='https://github.com/Taisei-Yamaguchi/BananaAI2_py' className='link'>GitHub (AI)</a>
                        <span>* I created 2 models (BananaDetect.pkl, BananaPredict.pkl)</span>
                        </div>
                    <p className="py-4">
                    I often eat bananas for breakfast, but depending on when I eat them, I sometimes find that they are not tasty. Therefore, I decided to create a web application that uses machine learning to judge the taste of bananas based on their images so that I can always eat bananas with good taste. This is a model that judges the taste of bananas based on the detected bananas.
                    </p>
                    <img src='/images/banana_application2.png' alt='Banana AI'></img>
                    <img src='/images/banana_application.png' alt='Banana AI'></img>
                </div>
                </dialog>
            </div>


            {/* deliverable5 */}
            <div className="card w-96 bg-base-100 shadow-xl mt-4 mr-3">
                <div className="card-body">
                    <h2 className="card-title">
                        <a className='link link-hover' href='https://github.com/Taisei-Yamaguchi/0523-OOP-Midterm-Project' target='_blank'>OOP Midterm Project</a>
                    </h2>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Javascript</div>
                        <div className="badge badge-outline">HTML</div>
                        <div className="badge badge-outline">CSS</div>
                    </div>
                </div>

                <figure onClick={()=>document.getElementById('my_modal_oop_midterm').showModal()}>  
                    <img src='/images/oop-midterm1.png' alt='OOP Midterm'></img>
                </figure>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_oop_midterm" className="modal">
                <div className="modal-box h-2/3">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h3 className="font-bold text-lg">OOP Midterm Project (2023.9)</h3>
                        <div className='flex flex-col'>
                        <a target='_blank' href='https://github.com/Taisei-Yamaguchi/0523-OOP-Midterm-Project' className='link'>GitHub</a>
                        </div>
                    <p className="py-4">
                    This is a model site for a Shopping Site I created for a school project. I tried to create classes such as shoppingCart and ItemList with an object-oriented approach.
                    </p>
                    <img src='/images/oop-midterm1.png' alt='oop-midterm'></img>
                    <img src='/images/oop-midterm2.png' alt='oop-midterm'></img>
                </div>
                </dialog>
            </div>

            {/* deliverable6 */}
            <div className="card w-96 bg-base-100 shadow-xl mt-4 mr-3">
                <div className="card-body">
                    <h2 className="card-title">
                        <a className='link link-hover' href='https://github.com/small-valley/0523-Final-Project' target='_blank'>Web2 Fianl Project</a>
                    </h2>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Javascript</div>
                        <div className="badge badge-outline">JQuery</div>
                        <div className="badge badge-outline">HTML</div>
                        <div className="badge badge-outline">CSS</div>
                    </div>
                </div>

                <figure onClick={()=>document.getElementById('my_modal_web2_final').showModal()}>  
                    <img src='/images/web2-final1.png' alt='Web2 Final'></img>
                </figure>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_web2_final" className="modal">
                <div className="modal-box h-2/3">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h3 className="font-bold text-lg">Web2 Final Project (2023.8 ~ 2023.9)</h3>
                        <div className='flex flex-col'>
                        <a target='_blank' href='https://github.com/small-valley/0523-Final-Project' className='link'>GitHub</a>
                        </div>
                        <p>Colaborators: <strong>Masahiro Kotani</strong>, <strong>Lam Kai On Bosco</strong></p>
                    <p className="py-4">
                    This is a model site for a Banking Site created for a school project. The server side was prepared in advance, and we mainly created the Frontend that makes API requests. We also worked on the project in a team of three.
                    </p>
                    <img src='/images/web2-final1.png' alt='Web2 Final'></img>
                    <img src='/images/web2-final2.png' alt='Web2 Final'></img>
                    <img src='/images/web2-final3.png' alt='Web2 Final'></img>
                    <img src='/images/web2-final4.png' alt='Web2 Final'></img>
                </div>
                </dialog>
            </div>


            {/* deliverable7 */}
            <div className="card w-96 bg-base-100 shadow-xl mt-4 mr-3">
                <div className="card-body">
                    <h2 className="card-title">
                        <a className='link link-hover' href='https://github.com/Taisei-Yamaguchi/Laravel_Snack1.2' target='_blank'>Snack App</a>
                    </h2>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">PHP</div>
                        <div className="badge badge-outline">Laravel</div>
                        <div className="badge badge-outline">MySQL</div>
                        <div className="badge badge-outline">Javascript</div>
                        <div className="badge badge-outline">HTML</div>
                        <div className="badge badge-outline">CSS</div>
                    </div>
                </div>

                <figure onClick={()=>document.getElementById('my_modal_snack').showModal()}>  
                    <img src='/images/snack_search_1.png' alt='Snack'></img>
                </figure>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_snack" className="modal">
                <div className="modal-box h-2/3">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h3 className="font-bold text-lg">Snack App (2023.3 ~ 2023.6)</h3>
                        <div className='flex flex-col'>
                        <a target='_blank' href='https://github.com/Taisei-Yamaguchi/Laravel_Snack1.2' className='link'>GitHub</a>
                        <a target='_blank' href='http://43.207.83.193/Laravel_Snack1.2/Snack1.0/public/mypage/login' className='link'>App Link</a>
                        </div>
                    <p className="py-4">
                    This application is for sharing information about sweets and sweets from other countries. Sweets sold in Japan, where I am from, and sweets sold here in Canada are completely different. Both countries' sweets are delicious, but I could not get to know Canadian sweets while I was in Japan. I am sure it is the same for people in Canada. That is why we created this application. This application has a "Like" function, a search function, and a recommendation function. function, search function, and recommended snacks function. It also has a "Like" function. status, the application will automatically suggest the user's favorite snacks.
                    </p>
                    <img src='/images/snack_search_1.png' alt='Snack'></img>
                    <img src='/images/snack_recommend_1.png' alt='Snack'></img>
                </div>
                </dialog>
            </div>

            {/* deliverable8 */}

            <div className="card w-96 bg-base-100 shadow-xl mt-4 mr-3">
                <div className="card-body">
                    <h2 className="card-title">
                        <a className='link link-hover' href='https://github.com/Taisei-Yamaguchi/laravel_chat2' target='_blank'>Chat App</a>
                    </h2>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">PHP</div>
                        <div className="badge badge-outline">Laravel</div>
                        <div className="badge badge-outline">MySQL</div>
                        <div className="badge badge-outline">Javascript</div>
                        <div className="badge badge-outline">HTML</div>
                        <div className="badge badge-outline">CSS</div>
                    </div>
                </div>

                <figure onClick={()=>document.getElementById('my_modal_chat').showModal()}>  
                    <img src='/images/chat_home_1.png' alt='Chat'></img>
                </figure>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_chat" className="modal">
                <div className="modal-box h-2/3">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h3 className="font-bold text-lg">Chat App (2023.8 ~ 2023.9)</h3>
                        <div className='flex flex-col'>
                        <a target='_blank' href='https://github.com/Taisei-Yamaguchi/laravel_chat2' className='link'>GitHub</a>
                        <a target='_blank' href='http://13.231.31.52/laravel_chat2/Chat2/public/mypage/login' className='link'>App Link</a>
                        </div>
                    <p className="py-4">
                    This application allows users to communicate with each other. Although simple, it has basic functions such as posting, replying, and deleting.
                    </p>
                    <img src='/images/chat_login_1.png' alt='Chat'></img>
                    <img src='/images/chat_home_1.png' alt='Chat'></img>
                    <img src='/images/chat_reply_1.png' alt='Chat'></img>
                </div>
                </dialog>
            </div>

            {/* deliverable9 */}
            <div className="card w-96 bg-base-100 shadow-xl mt-4 mr-3">
                <div className="card-body">
                    <h2 className="card-title">
                        <a className='link link-hover' href='https://github.com/Taisei-Yamaguchi/Javascript_mplayer1' target='_blank'>Music Player</a>
                    </h2>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Javascript</div>
                        <div className="badge badge-outline">HTML</div>
                        <div className="badge badge-outline">CSS</div>
                    </div>
                </div>

                <figure onClick={()=>document.getElementById('my_modal_mplayer').showModal()}>  
                    <img src='/images/mplayer_1.png' alt='Music Player'></img>
                </figure>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_mplayer" className="modal">
                <div className="modal-box h-2/3">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h3 className="font-bold text-lg">Music Player (2022.12)</h3>
                        <div className='flex flex-col'>
                        <a target='_blank' href='https://github.com/Taisei-Yamaguchi/Javascript_mplayer1' className='link'>GitHub</a>
                        </div>
                    <p className="py-4">
                    This music player is a collection of free music downloads to get you in the Halloween mood. This application has the ability to play music in random order. Also, the illustration changes while the music player is playing and while it is stopped.
                    </p>
                    <img src='/images/mplayer_1.png' alt='Music Player'></img>
                </div>
                </dialog>
            </div>
        </div>
        </div>
    );
}


export default Deliverables;
