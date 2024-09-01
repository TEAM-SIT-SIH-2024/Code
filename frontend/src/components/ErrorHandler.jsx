import '../../styles/error.css';

export function  ErrorHandler(){
  return (
    <div className="ErrorBody">
    <div className="Errheader-container">
      <h1>Oops! Something went wrong.</h1>
      <p className='Ep'>We couldn't find the page you were looking for.</p>
      
      <img
        src="../../assets/images/error3.png"
        alt="Error"
        className="error-image"
      />
    </div>
    </div>
  );
};