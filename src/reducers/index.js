import {
  ADD_RECIPE,
  REMOVE_FROM_CALENDAR
} from '../actions'

const initialMealState = () => ({
  breakfast: null,
  lunch: null,
  dinner: null
});

const initialCalendarState = {
  sunday: initialMealState(),
  monday: initialMealState(),
  tuesday: initialMealState(),
  wednesday: initialMealState(),
  thursday: initialMealState(),
  friday: initialMealState(),
  saturday: initialMealState()
}

function calendar (state = initialCalendarState, action) {
  const { day, recipe, meal } = action;

  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: recipe.label
        }
      };
    case REMOVE_FROM_CALENDAR:
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: null
        }
      };
    default:
      return state;
  }
}

export default calendar