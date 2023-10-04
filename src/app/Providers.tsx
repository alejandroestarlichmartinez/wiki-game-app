'use client'
// React amd Next
import React from 'react'
import { ThemeProvider } from 'next-themes'

export const Providers = ({children}: any) => {
  return (
    <ThemeProvider
      enableSystem={true}
      attribute='class'>
      <div >
        {children}
      </div>
    </ThemeProvider>
  )
}

// className="dark:bg-gray-700 dark:text-dark-text-color transition-colors duration-300 min-h-screen select-none"