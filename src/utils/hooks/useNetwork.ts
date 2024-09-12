import { useState, useEffect } from 'react'

function useNetwork(): boolean {
  const [networkOnline, setNetworkOnline] = useState<boolean>(navigator.onLine)

  const handleOnline = () => setNetworkOnline(true)
  const handleOffline = () => setNetworkOnline(false)

  useEffect(() => {
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return networkOnline
}

export default useNetwork
