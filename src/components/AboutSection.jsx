import personal from '../assets/images/personal.jpg';

export default function AboutSection() {
  return (
    <section className="w-full font-dxsitrus my-10 px-2">
      <div
        className="max-w-6xl mx-auto flex flex-row justify-center items-start"
        style={{ columnGap: '2rem' }} 
      >
        
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', marginLeft: '5rem' }}>
          <img
            src={personal}
            alt="Carlos Alburez"
            style={{
              width: '300px',
              height: 'auto',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              objectFit: 'cover',
            }}
          />
        </div>

    
        <div
          style={{
            maxWidth: '550px',
            textAlign: 'left',
            marginLeft: '8rem', 
          }}
        >
          <h2
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              lineHeight: '1',
              marginBottom: '0.5rem',
            }}
          >
            HELLO!
          </h2>
          <h3
            style={{
              fontSize: '40px',
              fontWeight: 'bold',
              lineHeight: '1',
              marginBottom: '0.5rem',
            }}
          >
            Me llamo Carlos Alburez
          </h3>
          <h3
            style={{
              fontSize: '40px',
              fontWeight: 'bold',
              lineHeight: '1',
              marginBottom: '1rem',
            }}
          >
            Soy un desarrollador JR
          </h3>
          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.6',
              color: '#333',
              fontFamily: 'Inter, sans-serif',
              textAlign: 'justify'
            }}
          >
           Me destaco por mi capacidad para resolver problemas de manera eficiente, adaptarme a nuevos entornos tecnológicos y asumir retos con una actitud proactiva. Me interesa especialmente el desarrollo de soluciones innovadoras en el campo de la tecnología y la informática. Me esfuerzo por mantener un equilibrio entre estudios, actividades personales y hobbies.
          </p>
        </div>
      </div>
    </section>
  );
}
