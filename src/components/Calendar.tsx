// 'use client';

// import { useState } from "react";
// import { toast } from "sonner";

// interface CalendarClass {
//   id: string;
//   name: string;
//   time: string;
//   instructor: string;
//   booked: number;
//   capacity: number;
// }

// // interface CalendarViewProps {
// //   onSelectClass: (classData: CalendarClass) => void;
// // }

// const weekDays = ["Lun", "Mar", "Mié", "Jue", "Vie"];


// const scheduleData: { [key: string]: CalendarClass[] } = {
//   "Lun": [
//     { id: "1", name: "Yoga", time: "08:00", instructor: "María López", booked: 12, capacity: 15 },
//     { id: "2", name: "CrossFit", time: "10:00", instructor: "Juan Pérez", booked: 18, capacity: 20 },
//     { id: "3", name: "Spinning", time: "18:00", instructor: "Carlos Ruiz", booked: 22, capacity: 25 },
//   ],
//   "Mar": [
//     { id: "4", name: "Pilates", time: "09:00", instructor: "Ana García", booked: 10, capacity: 12 },
//     { id: "5", name: "HIIT", time: "12:00", instructor: "Pedro Sánchez", booked: 15, capacity: 18 },
//     { id: "6", name: "Yoga", time: "19:00", instructor: "María López", booked: 13, capacity: 15 },
//   ],
//   "Mié": [
//     { id: "7", name: "CrossFit", time: "07:00", instructor: "Juan Pérez", booked: 17, capacity: 20 },
//     { id: "8", name: "Zumba", time: "17:00", instructor: "Laura Martín", booked: 19, capacity: 25 },
//     { id: "9", name: "Spinning", time: "20:00", instructor: "Carlos Ruiz", booked: 24, capacity: 25 },
//   ],
//   "Jue": [
//     { id: "10", name: "Yoga", time: "08:00", instructor: "María López", booked: 11, capacity: 15 },
//     { id: "11", name: "Boxing", time: "11:00", instructor: "Miguel Torres", booked: 8, capacity: 10 },
//     { id: "12", name: "HIIT", time: "18:00", instructor: "Pedro Sánchez", booked: 16, capacity: 18 },
//   ],
//   "Vie": [
//     { id: "13", name: "Pilates", time: "09:00", instructor: "Ana García", booked: 11, capacity: 12 },
//     { id: "14", name: "CrossFit", time: "13:00", instructor: "Juan Pérez", booked: 19, capacity: 20 },
//     { id: "15", name: "Zumba", time: "19:00", instructor: "Laura Martín", booked: 23, capacity: 25 },
//   ],
//   "Sáb": [
//     { id: "16", name: "Yoga", time: "10:00", instructor: "María López", booked: 14, capacity: 15 },
//     { id: "17", name: "Spinning", time: "12:00", instructor: "Carlos Ruiz", booked: 21, capacity: 25 },
//   ],
//   "Dom": [
//     { id: "18", name: "Pilates", time: "10:00", instructor: "Ana García", booked: 9, capacity: 12 },
//     { id: "19", name: "Yoga", time: "11:00", instructor: "María López", booked: 12, capacity: 15 },
//   ],
// };
// const CalendarView = () => {
//   const [currentWeek, setCurrentWeek] = useState(0);

//   return (
//     <div className="p-6 md:p-12 bg-(--secondary) border border-(--muted-foreground) rounded-2xl shadowd-lg  my-6d mx-6">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-8 px-2 md:px-6">
//         <h3 className="text-2xl md:text-3xl font-semibold text-(--primary)">Calendario Semanal</h3>
//       </div>

//       {/* Calendario */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 px-2 md:px-6">
//         {weekDays.map((day) => (
//           <div key={day} className="space-y-3">
//             {/* Día */}
//             <div className="text-center pb-3 border-b border-(--muted-foreground)">
//               <p className="text-sm md:text-base font-semibold text-(--primary)">{day}</p>
//             </div>

//             {/* Clases */}
//             <div className="space-y-3">
//               {scheduleData[day]?.map((classData) => {
//                 const spotsLeft = classData.capacity - classData.booked;
//                 const isAlmostFull = spotsLeft <= 3;

//                 return (
//                   <button
//                     key={classData.id}
//                     onClick={() => toast.error("Para reservar actividades debe tener un plan")}
//                     className="w-full text-left p-4 md:p-5 rounded-2xl border border-(--muted-foreground) hover:border-(--primary) transition-colors bg-[var(--secondary)] hover:bg-(--primary)/10"
//                   >
//                     <p className="text-base md:text-lg font-medium truncate text-(--card-foreground)">{classData.name}</p>
//                     <p className="text-sm text-(--muted-foreground)">{classData.time}</p>

//                     <div className="mt-3 flex items-center gap-2">
//                       <div className="h-2 flex-1 bg-(--muted-foreground) rounded-full overflow-hidden">
//                         <div
//                           className={`h-full rounded-full ${isAlmostFull ? "bg-yellow-500" : "bg-(--primary)"}`}
//                           style={{ width: `${(classData.booked / classData.capacity) * 100}%` }}
//                         />
//                       </div>
//                       <p className="text-[11px] md:text-xs text-(--muted-foreground)">{spotsLeft}</p>
//                     </div>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CalendarView;


'use client';

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { getAllClasses } from "@/services/classesService";
import { Classes } from "@/interfaces/Classes";

interface CalendarClass {
  id: string;
  name: string;
  time: string;
  instructor: string;
  booked: number;
  capacity: number;
}

// interface CalendarViewProps {
//   onSelectClass: (classData: CalendarClass) => void;
// }

const weekDays = ["Lun", "Mar", "Mié", "Jue", "Vie"];

const dayTranslations: Record<string, string> = {
  Monday: "Lun",
  Tuesday: "Mar",
  Wednesday: "Mié",
  Thursday: "Jue",
  Friday: "Vie",
};

const CalendarView = () => {
  const [scheduleData, setScheduleData] = useState<{ [key: string]: CalendarClass[] }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Classes[] = await getAllClasses();

        // agrupar clases por día de la semana
        const grouped: { [key: string]: CalendarClass[] } = {};

        data.forEach((cls) => {
          cls.schedules.forEach((sch) => {
            const day = dayTranslations[sch.dayOfWeek];
            if (!day) return;

            if (!grouped[day]) grouped[day] = [];

            grouped[day].push({
              id: sch.id,
              name: cls.name,
              time: sch.startTime,
              instructor: sch.trainer,
              booked: 0, // todavía no lo devuelve el backend
              capacity: cls.maxCapacity ?? 0,
            });
          });
        });

        setScheduleData(grouped);
      } catch (error) {
        toast.error("Error al cargar las actividades");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 md:p-12 bg-(--secondary) border border-(--muted-foreground) rounded-2xl shadow-lg my-6 mx-6">
      <div className="flex items-center justify-between mb-8 px-2 md:px-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-(--primary)">Calendario Semanal</h3>
      </div>

      {/* Grilla del calendario */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 px-2 md:px-6">
        {weekDays.map((day) => (
          <div key={day} className="space-y-3">
            <div className="text-center pb-3 border-b border-(--muted-foreground)">
              <p className="text-sm md:text-base font-semibold text-(--primary)">{day}</p>
            </div>

            <div className="space-y-3">
              {scheduleData[day]?.map((classData) => {
                const spotsLeft = classData.capacity - classData.booked;
                const isAlmostFull = spotsLeft <= 3;

                return (
                  <button
                    key={classData.id}
                    onClick={() => toast.error("Para reservar actividades debe tener un plan")}
                    className="w-full text-left p-4 md:p-5 rounded-2xl border border-(--muted-foreground) hover:border-(--primary) transition-colors bg-[var(--secondary)] hover:bg-(--primary)/10"
                  >
                    <p className="text-base md:text-lg font-medium truncate text-(--card-foreground)">
                      {classData.name}
                    </p>
                    <p className="text-sm text-(--muted-foreground)">{classData.time}</p>

                    <div className="mt-3 flex items-center gap-2">
                      <div className="h-2 flex-1 bg-(--muted-foreground) rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${isAlmostFull ? "bg-yellow-500" : "bg-(--primary)"}`}
                          style={{ width: `${(classData.booked / classData.capacity) * 100}%` }}
                        />
                      </div>
                      <p className="text-[11px] md:text-xs text-(--muted-foreground)">{spotsLeft}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
