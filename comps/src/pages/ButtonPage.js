import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function ButtonPage() {
  const handleClick = () => {
    console.log('Click');
  };

  return (
    <div>
      <div>
        <Button success className='mb-5' onClick={ handleClick }>
          <GoBell />
          Success
        </Button>
      </div>
      <div>
        <Button success outline rounded>
          <GoCloudDownload />
          Success
        </Button>
      </div>
      <div>
        <Button success rounded>
          <GoDatabase />
          Success
        </Button>
      </div>
      <div>
        <Button success outline>Success</Button>
      </div>
      <div>
        <Button primary>Primary</Button>
      </div>
      <div>
        <Button secondary>Secondary</Button>
      </div>
      <div>
        <Button warning>Warning</Button>
      </div>
      <div>
        <Button danger>Danger</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
