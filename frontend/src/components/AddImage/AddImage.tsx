import './AddImage.css';
function AddImage ({ type, children, disabled }) {
    return(
        <div>
            <button disabled={disabled} className={type}:"add">
                {children}
              </button>
     </div>
    );
}

export default AddImage;