const UPDATE_INPUT = 'UPDATE_INPUT'

const updateInput = (input) => (
    // console.log("input", input),
    {
        type: UPDATE_INPUT,
        payload: { 
            txt: input
        }
    }
)

export default updateInput