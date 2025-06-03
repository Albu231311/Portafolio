import Welcomeimage from './Welcomeimage';

export default function Header() {
  return (
    <header className="flex flex-col items-center p-4 bg-transparent text-gray-800 font-dxsitrus">
      <div style={{ display: 'flex', alignItems: 'flex-start', columnGap: '25rem' }}>
        
        <div className="flex flex-col text-left">
          <span className="font-bold text-xl">Portafolio</span>
          <span className="text-sm">Carlos Alburez 231311</span>
        </div>

        <div className="text-sm self-start text-right">
          Sistemas y Tecnologías Web - 2025
        </div>
      </div>

      <Welcomeimage />
    </header>
  );
}
