// this is an action creator
//the object returned by this function is the action
//the type is mandatory key required for the action creator

// Action 
// {
//     type:
//     payload: anything a flexible property which may or may not use
// }
export const setCurrentUser = (user) => (
    {
        type: 'SET_CURRENT_USER',
        payload: user
    }
)

