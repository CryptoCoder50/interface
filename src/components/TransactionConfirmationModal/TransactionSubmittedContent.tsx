import { ChainId } from 'moonwalkerswap-avalanche-sdk'
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Button, LinkExternal } from 'moonwalkerswap-uikit-avalanche'
import { ArrowUpCircle } from 'react-feather'
import { AutoColumn } from '../Column'
import { getSnowtraceLink } from '../../utils'
import { Wrapper, Section, ConfirmedIcon, ContentHeader } from './helpers'

type TransactionSubmittedContentProps = {
  onDismiss: () => void
  hash: string | undefined
  chainId: ChainId
}

const TransactionSubmittedContent = ({ onDismiss, chainId, hash }: TransactionSubmittedContentProps) => {
  const theme = useContext(ThemeContext)

  return (
    <Wrapper>
      <Section>
        <ContentHeader onDismiss={onDismiss}>Transaction submitted</ContentHeader>
        <ConfirmedIcon>
          <ArrowUpCircle strokeWidth={0.5} size={97} color={theme.colors.primary} />
        </ConfirmedIcon>
        <AutoColumn gap="8px" justify="center">
          {chainId && hash && (
            <LinkExternal href={getSnowtraceLink(chainId, hash, 'transaction')}>View on Snowtrace</LinkExternal>
          )}
          <Button onClick={onDismiss} mt="20px">
            Close
          </Button>
        </AutoColumn>
      </Section>
    </Wrapper>
  )
}

export default TransactionSubmittedContent
