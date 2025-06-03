export default function ContactBar() {
  const linkStyle = {
    color: 'brown',
    textDecoration: 'none',
    fontSize: '2rem', 
    fontWeight: 'bold', 
  };

  return (
    <div className="w-full font-dxsitrus mt-8 flex flex-col items-center" style={{ paddingBottom: '2rem' }}>
      
      <div className="w-3/5">
        
        <div style={{ borderTop: '3px solid #2596be' }}></div>

        
        <div className="flex justify-around items-center py-4">
          <a
            href="https://github.com/Albu231311"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/carlos-alburez-b93208188/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            LINKEDIN
          </a>
          <a
            href="https://uvg-gt-csm.symplicity.com/profiles/carlos.andres.alburez.mart..n"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            SOYUVG
          </a>
        </div>

       
        <div style={{ borderBottom: '3px solid #2596be' }}></div>
      </div>
    </div>
  );
}
