'use client'

import { cn } from '@/lib/utils'
import { Book, XIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { Alert, AlertDescription, AlertTitle, Button, Progress } from './ui'

export function RoadmapAlert() {
  const [showAgain, setShowAgain] = useState(true)
  const [isAlertVisible, setIsAlertVisible] = useState(true)
  const [progress, setProgress] = useState(1)
  const router = useRouter()

  const alertLoop = useCallback(() => {
    if (!showAgain) return
    // eslint-disable-next-line prefer-const
    let intervalId: NodeJS.Timeout

    const updateProgress = () => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 2)
      } else {
        setIsAlertVisible(false)
        clearInterval(intervalId)
      }
    }

    const resetProgress = () => {
      setProgress(1)
      setIsAlertVisible(true)
    }

    intervalId = setInterval(updateProgress, 500)

    const resetIntervalId = setInterval(resetProgress, 60000)

    return () => {
      clearInterval(intervalId)
      clearInterval(resetIntervalId)
    }
  }, [progress, showAgain])

  useEffect(() => {
    return alertLoop()
  }, [alertLoop])

  return (
    <>
      <Alert
        className={cn(
          'fixed w-3/4 left-1/2 -translate-x-1/2 top-2.5 md:w-3/5 lg:w-1/3 lg:translate-x-0 lg:right-1.5 lg:left-auto',
          isAlertVisible ? '' : 'hidden',
        )}
      >
        <Book />
        <AlertTitle>Roteiro</AlertTitle>
        <AlertDescription className="flex flex-col justify-between items-center gap-2">
          <span className="self-start">
            Confira o nosso roteiro de apresentação.
          </span>
          <div className="flex flex-row justify-evenly items-center w-full">
            <Button onClick={() => router.push('/roadmap')}>
              Ver Roteiro!
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                localStorage.setItem('show-alert', 'false')
                setShowAgain(false)
                setIsAlertVisible(false)
              }}
            >
              <XIcon />
            </Button>
          </div>
          <Progress value={progress} className="w-full h-px" />
        </AlertDescription>
      </Alert>
    </>
  )
}
