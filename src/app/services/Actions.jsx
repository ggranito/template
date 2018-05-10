export const ActionTypes = {
    DRAWER_CHANGE: "DRAWER_CHANGE"
};

export const setDrawer = (open) => ({
    type: ActionTypes.DRAWER_CHANGE,
    open
});
