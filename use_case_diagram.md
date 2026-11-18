```mermaid
usecaseDiagram
    actor User as "Authenticated User"

    User --> (Sign Up)
    User --> (Sign In)
    User --> (View Dashboard)
    User --> (Manage Habits)
    User --> (Manage Areas)
    User --> (View Statistics)
    User --> (Set Notifications)
    User --> (Complete Habits)
    User --> (View Calendar)
    User --> (Toggle Dark Mode)
    User --> (Logout)

    note right of (Manage Habits)
        Includes: Add Habit, Edit Habit, Delete Habit, View All Habits
    end note

    note right of (Manage Areas)
        Includes: Add Area, Edit Area, Delete Area, View Areas
    end note

    note right of (View Statistics)
        Includes: View Habit Statistics, Area Statistics, Completion Heatmap
    end note
```