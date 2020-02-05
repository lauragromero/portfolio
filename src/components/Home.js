import React from 'react';
import Header from './Header';

const Home =()=>{
    return(
        <React.Fragment>
        <Header/>
        <main>
            <section>
                <h2>¡HOLA!</h2>
                <p>Soy Laura, después de licenciarme en biología y estudiar un máster en genética forense, he decidido reinventarme como desarrolladora frond-end.</p>
            </section>
        </main>
        </React.Fragment>
    )
}



export default Home;