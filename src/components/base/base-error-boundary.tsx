import React from 'react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div>
      <h1>Something went wrong:(</h1>
      <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
      <details title="Error Stack">
        <summary>Error Stack</summary>
        <pre>{error.stack}</pre>
      </details>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

interface Props {
  children: React.ReactNode
}

export const BaseErrorBoundary = (props: Props) => {
  return <ErrorBoundary FallbackComponent={ErrorFallback}>{props.children}</ErrorBoundary>
}
