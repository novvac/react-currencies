import {
    CircularProgress
} from '@material-ui/core'
import { styled } from '@material-ui/core/styles'

const RootContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
})

function Loader() {
    return (
        <RootContainer>
            <CircularProgress size={64}/>
        </RootContainer>
    )
}

export default Loader;