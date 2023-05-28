import React from 'react'
import { Console, Header, TextArea } from './InputConsole'
import { BiExport } from 'react-icons/bi'
import styled from 'styled-components'

const OutputDiv=styled.div`
  background-color:#0d1117
`


const OutputConsole = ({ currentOutput }) => {
  return (
    <OutputDiv>
    <Console>
      <Header>
        Output:

        <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(currentOutput)}`} download="output.txt">
          <BiExport /> Export Output
        </a>

      </Header>
      <TextArea
        value={currentOutput}
        disabled
      />
    </Console>
    </OutputDiv>
  )
}

export default OutputConsole