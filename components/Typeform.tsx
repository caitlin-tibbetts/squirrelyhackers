import * as typeformEmbed from '@typeform/embed'
import React, { useRef, useEffect } from 'react'

interface TypeformProps {
  tfLink: string
  buttonText: string
  className: string
}

const Typeform = (props: TypeformProps): JSX.Element => {
  const typeformRef = useRef(null)

  useEffect(() => {
    typeformEmbed.makeWidget(typeformRef.current, props.tfLink, {
      hideFooter: true,
      hideHeaders: true,
      opacity: 0,
      buttonText: props.buttonText,
    })
  }, [typeformRef])

  return <div ref={typeformRef} className={props.className} style={{height:400, width:1000}}/>
}

export default Typeform