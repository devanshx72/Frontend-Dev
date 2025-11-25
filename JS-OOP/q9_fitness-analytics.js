// Q9: Fitness Analytics - filter, reduce, map + Error

const workoutData = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
  constructor(data) {
    if (!data || data.length === 0) {
      throw new Error("No workout data provided!");
    }
    this.data = data;
  }

  getActiveUsers() {
    return this.data.filter(user => user.steps > 7000);
  }

  getAverageCalories() {
    return this.data.reduce((sum, u) => sum + u.calories, 0) / this.data.length;
  }

  getUserSummary() {
    return this.data.map(u => 
      `${u.user}: ${u.steps} steps, ${u.calories} cal burned`
    );
  }
}

// Execute
try {
  const analytics = new FitnessAnalytics(workoutData);
  console.log("Active Users:", analytics.getActiveUsers());
  console.log("Avg Calories:", analytics.getAverageCalories());
  console.log("Summary:");
  analytics.getUserSummary().forEach(s => console.log("  • " + s));
} catch (error) {
  console.error(error.message);
}