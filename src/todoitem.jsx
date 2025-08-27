import { TrashIcon } from '@heroicons/react/24/solid'

export default function TodoItem({ tarea, toggleComplete, eliminarTarea }) {
  return (
    <div className="flex items-center justify-between gap-3 mb-2 p-3 shadow-md rounded bg-white">
      <span
        className={`${
          tarea.completada ? 'line-through text-gray-400' : 'text-gray-800'
        }`}
      >
        {tarea.texto}
      </span>

      <div className="flex items-center gap-2">
        {/* Checkbox para completar tarea */}
        <input
          className="cursor-pointer w-5 h-5"
          type="checkbox"
          checked={tarea.completada}
          onChange={() => toggleComplete(tarea.id)}
        />

        {/* Botón de eliminar */}
        <button onClick={() => eliminarTarea(tarea.id)}>
          <TrashIcon className="w-5 h-5 text-gray-400 hover:text-red-500" />
        </button>
      </div>
    </div>
  )
}
