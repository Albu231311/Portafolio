import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import js from '../assets/images/js.png';
import vue from '../assets/images/vue.png';
import react from '../assets/images/react.png';
import vite from '../assets/images/vite.png';
import sql from '../assets/images/sql.png';
import php from '../assets/images/php.png';
import kotlin from '../assets/images/kotlin.png';
import python from '../assets/images/python.png';
import java from '../assets/images/java.png';
import c from '../assets/images/c.png';
import cmas from '../assets/images/cmas.png';
import github from '../assets/images/github.png';
import docker from '../assets/images/docker.png';
import correo from '../assets/images/hh.png';

export default function InfoSection() {
  return (
    <section className="w-full font-dxsitrus my-12 flex justify-center">
      <div className="w-3/5 flex justify-between" style={{ gap: '1 rem' }}>

        {/* EXPERIENCE */}
        <div className="flex-1 text-left">
          <h2 className="text-3xl font-bold mb-4 text-center">EXPERIENCE</h2>

          <div className="mb-4">
            <p style={{ fontWeight: 800, fontFamily: 'Montserrat, sans-serif', fontSize: '1.2rem' }}>
              ene. 2025 - Presente
            </p>
            <p className="font-semibold">Auxiliar del Departamento de Matemática - Cálculo 2</p>
            <p style={{ fontWeight: 800, color: '#2596be', fontFamily: 'Montserrat, sans-serif', fontSize: '1.2rem', marginBottom: '0.25rem' }}>
              Universidad del Valle de Guatemala
            </p>
          </div>

          <div className="mb-4">
            <p style={{ fontWeight: 800, fontFamily: 'Montserrat, sans-serif', fontSize: '1.2rem' }}>
              nov. 2022 - ene. 2023
            </p>
            <p className="font-semibold">Agente Telefónico</p>
            <p style={{ fontWeight: 800,    color: '#2596be', fontFamily: 'Montserrat, sans-serif', fontSize: '1.2rem', marginBottom: '0.25rem' }}>
              Allied Global
            </p>
          </div>

          <div className="mb-4">
            <p style={{ fontWeight: 800, fontFamily: 'Montserrat, sans-serif', fontSize: '1.2rem' }}>
              oct. 2021 - dic. 2021
            </p>
            <p className="font-semibold">Agente en Chats</p>
            <p style={{ fontWeight: 800,color: '#2596be', fontFamily: 'Montserrat, sans-serif', fontSize: '1.2rem', marginBottom: '0.25rem' }}>
              24-7 Intouch - WTC
            </p>
          </div>

          <div className="mb-4">
            <p style={{ fontWeight: 800, fontFamily: 'Montserrat, sans-serif', fontSize: '1.2rem' }}>
              oct. 2020 - ene. 2021
            </p>
            <p className="font-semibold">Agente Telefónico</p>
            <p style={{ fontWeight: 800,color: '#2596be', fontFamily: 'Montserrat, sans-serif', fontSize: '1.2rem', marginBottom: '0.25rem' }}>
              24-7 Intouch - WTC
            </p>
          </div>
        </div>

        {/* FORMATION */}
        <div className="flex-1 text-center">
          <h2 className="text-3xl font-bold mb-4">FORMATION</h2>

          <div className="mb-4">
            <p style={{ fontWeight: 800, fontFamily: 'Montserrat, sans-serif', fontSize: '1.2rem' }}>
              ene. 2023 - Presente
            </p>
            <p className="font-semibold">Ingeniería en Ciencias de la Computación</p>
            <p style={{ fontWeight: 800,color: '#2596be', fontFamily: 'Montserrat, sans-serif', fontSize: '1.2rem', marginBottom: '0.25rem' }}>
              Universidad del Valle de Guatemala
            </p>
          </div>

          <div className="mb-4">
            <p style={{ fontWeight: 800, fontFamily: 'Montserrat, sans-serif', fontSize: '1.2rem' }}>
              2008 - 2022
            </p>
            <p className="font-semibold">Bachillerato en Ciencias y Letras</p>
            <p style={{ fontWeight: 800,color: '#2596be', fontFamily: 'Montserrat, sans-serif', fontSize: '1.2rem', marginBottom: '0.25rem' }}>
              Colegio Bilingüe Los Andes
            </p>
          </div>

        {/* HABILITES */}
          <h2 className="text-3xl font-bold mb-4">HABILITIES</h2>
            <div
            className="grid grid-cols-5 justify-items-center"
            style={{ rowGap: '16px' }}
            >
            <img src={html}alt="HTML" style={{ width: '25px', height: '25px' }} />
            <img src={css} alt="CSS" style={{ width: '25px', height: '25px' }} />
            <img src={js} alt="JavaScript" style={{ width: '25px', height: '25px' }} />
            <img src={vue} alt="Vue" style={{ width: '25px', height: '25px' }} />
            <img src={react} alt="React" style={{ width: '25px', height: '25px' }} />

            <img src={vite} alt="Vite" style={{ width: '25px', height: '25px' }} />
            <img src={sql} alt="SQL" style={{ width: '40px', height: '25px' }} />
            <img src={php} alt="PHP" style={{ width: '25px', height: '25px' }} />
            <img src={kotlin} alt="Kotlin" style={{ width: '45px', height: '20px' }} />
            <img src={python} alt="Python" style={{ width: '50px', height: '25px' }} />

            <img src={java} alt="Java" style={{ width: '40px', height: '25px' }} />
            <img src={c} alt="C" style={{ width: '25px', height: '25px' }} />
            <img src={cmas} alt="C++" style={{ width: '25px', height: '25px' }} />
            <img src={github} alt="GitHub" style={{ width: '25px', height: '25px' }} />
            <img src={docker} alt="Docker" style={{ width: '50px', height: '25px' }} />
            </div>


        </div>

        {/* HOBBIES */}
        <div className="flex-1 text-center">
          <h2 className="text-3xl font-bold mb-4">HOBBIES</h2>

          <div className="mb-2">
            <p style={{ fontWeight: 400, fontFamily: 'Montserrat, sans-serif', fontSize: '1.2rem' }}>
              Jugar VideoJuegos
            </p>
            <p style={{ fontWeight: 400, fontFamily: 'Montserrat, sans-serif', fontSize: '1.2rem' }}>
              Futbol Américano
            </p>
            <p style={{ fontWeight: 400, fontFamily: 'Montserrat, sans-serif', fontSize: '1.2rem' }}>
              Badmintón
            </p>
            <p style={{ fontWeight: 400, fontFamily: 'Montserrat, sans-serif', fontSize: '1.2rem' }}>
              Películas
            </p>
          </div>
            {/* CONTACT */}
          <h2 className="text-3xl font-bold mb-4">CONTACT</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: '6rem'}}>
            <img src={correo} alt="Email Icon" style={{ width: '55px', height: '50px' }} />
            <p style={{ fontWeight: 800, fontFamily: 'Montserrat, sans-serif', fontSize: '1.2rem' }}>
                alb231311@uvg.edu.gt
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
