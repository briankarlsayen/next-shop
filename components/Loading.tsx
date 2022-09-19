import LoadingImg from '../icons/loading-icon.svg'
import '../styles/Loading.module.css'

interface LoadingProps {
  loading: boolean,
}

const Loading = (props: LoadingProps) => {
  return props.loading ? (
    <div className="loading-container">
      <div className='loading-width'>
        <div className="loading">
          <img style={{width: '150px'}} className='loading-img' src='/cart.svg' alt="loading-icon" />
        </div>
      </div>
      <div className='modal-background'></div>
    </div>
  ): null
}

export default Loading