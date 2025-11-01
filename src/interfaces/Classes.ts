export interface Schedules {
    id: string;
    dayOfWeek: string;
    startTime: string;
    endTime: string;
    trainer: string
}

export interface Classes {
    id: string;
    name: string;
    description: string;
    requiresReservation: boolean;
    maxCapacity: number | null;
    imageUrl: string;
    schedules: Schedules[];
    trainer: string;
    startTime: string
}