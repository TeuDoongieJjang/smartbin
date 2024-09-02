import {useEffect} from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'

const AddDate = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const fetchAdd = async () => {
      try {
        const res = await axios.post('/api/add')
        navigate('/api')
      } catch (error) {
        console.error("Error fetching add dates:", error);
      }
    }
    fetchAdd()
  }, [])
}

export default AddDate