const UPDATE_INPUT = 'UPDATE_INPUT'

const updateInput = (input) => (
    {
        type: UPDATE_INPUT,
        payload: { 
            txt: input
        }
    }
)

export default updateInput