import { createSlice } from '@reduxjs/toolkit';

const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [],
    selectedProject: null,
  },
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    selectProject: (state, action) => {
      state.selectedProject = action.payload;
    },
  },
});

export const { setProjects, selectProject } = projectSlice.actions;
export default projectSlice.reducer;