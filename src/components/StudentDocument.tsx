import { StudentData } from '../types';
import { MissingValue } from './MissingValue';

interface StudentDocumentProps {
  data: StudentData;
  isEditing?: boolean;
  onDataChange?: (updated: StudentData) => void;
  onPhotoUpload?: (file: File) => void;
}

export function StudentDocument({
  data,
  isEditing = false,
  onDataChange,
}: StudentDocumentProps) {
  const handleFieldChange = (key: keyof StudentData, value: string | null) => {
    if (onDataChange) {
      onDataChange({
        ...data,
        [key]: value === '' ? null : value,
      });
    }
  };

  return (
    <div
      id="student-document-sheet"
      className="print-container bg-white border border-slate-200/80 rounded-2xl shadow-sm sm:shadow-md p-5 sm:p-8 max-w-xl mx-auto w-full transition-all"
    >
      {/* Document Header */}
      <div id="document-header" className="mb-6">
        <h1
          id="document-title"
          className="text-2xl sm:text-[26px] font-bold text-slate-900 tracking-tight pb-3 border-b border-slate-400/80"
        >
          Маълумотнома
        </h1>
      </div>

      {/* Student Photo */}
      <div id="student-photo-container" className="mb-6 flex justify-start">
        <div className="w-[153px] sm:w-[171px] h-[202px] sm:h-[225px] overflow-hidden flex items-center justify-center">
          {data.photoUrl ? (
            <img
              src={data.photoUrl}
              alt={data.fullName}
              referrerPolicy="no-referrer"
              loading="eager"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== `${window.location.origin}/photo.jpg`) {
                  target.src = '/photo.jpg';
                }
              }}
              className="w-full h-full object-cover object-top block"
            />
          ) : (
            <div className="text-slate-400 text-xs text-center p-4">
              Акс нест
            </div>
          )}
        </div>
      </div>

      {/* Table 1: General Personal Information */}
      <div id="table-general-info" className="overflow-hidden rounded-lg border border-slate-200 mb-6 bg-white">
        <table className="w-full text-left text-sm border-collapse">
          <tbody>
            {/* Row 1: Ному насаб */}
            <tr className="border-b border-slate-200">
              <td className="w-[34%] sm:w-[30%] py-2.5 px-3.5 text-slate-700 bg-slate-50/70 font-normal align-top border-r border-slate-200">
                Ному насаб:
              </td>
              <td className="py-2.5 px-3.5 text-slate-900 font-bold align-top leading-snug">
                {isEditing ? (
                  <input
                    type="text"
                    value={data.fullName}
                    onChange={(e) => handleFieldChange('fullName', e.target.value)}
                    className="w-full px-2 py-1 border border-slate-300 rounded font-semibold text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                ) : (
                  data.fullName
                )}
              </td>
            </tr>

            {/* Row 2: Ятим */}
            <tr className="border-b border-slate-200">
              <td className="py-2.5 px-3.5 text-slate-700 bg-slate-50/70 font-normal align-top border-r border-slate-200">
                Ятим:
              </td>
              <td className="py-2.5 px-3.5 text-slate-900 font-bold align-top">
                {isEditing ? (
                  <input
                    type="text"
                    value={data.isOrphan}
                    onChange={(e) => handleFieldChange('isOrphan', e.target.value)}
                    className="w-full px-2 py-1 border border-slate-300 rounded font-semibold text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                ) : (
                  data.isOrphan
                )}
              </td>
            </tr>

            {/* Row 3: Кишвар */}
            <tr className="border-b border-slate-200">
              <td className="py-2.5 px-3.5 text-slate-700 bg-slate-50/70 font-normal align-top border-r border-slate-200">
                Кишвар:
              </td>
              <td className="py-2.5 px-3.5 text-slate-900 font-bold align-top">
                {isEditing ? (
                  <input
                    type="text"
                    value={data.country}
                    onChange={(e) => handleFieldChange('country', e.target.value)}
                    className="w-full px-2 py-1 border border-slate-300 rounded font-semibold text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                ) : (
                  data.country
                )}
              </td>
            </tr>

            {/* Row 4: Вилоят / Минтақа */}
            <tr className="border-b border-slate-200">
              <td className="py-2.5 px-3.5 text-slate-700 bg-slate-50/70 font-normal align-top border-r border-slate-200">
                Вилоят / Минтақа:
              </td>
              <td className="py-2.5 px-3.5 align-top">
                {isEditing ? (
                  <input
                    type="text"
                    placeholder="Маълумот нест (холӣ гузоред)"
                    value={data.region ?? ''}
                    onChange={(e) => handleFieldChange('region', e.target.value)}
                    className="w-full px-2 py-1 border border-slate-300 rounded text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                ) : data.region ? (
                  <span className="text-slate-900 font-bold">{data.region}</span>
                ) : (
                  <MissingValue />
                )}
              </td>
            </tr>

            {/* Row 5: Ноҳия / Шаҳр */}
            <tr className="border-b border-slate-200">
              <td className="py-2.5 px-3.5 text-slate-700 bg-slate-50/70 font-normal align-top border-r border-slate-200">
                Ноҳия / Шаҳр:
              </td>
              <td className="py-2.5 px-3.5 align-top">
                {isEditing ? (
                  <input
                    type="text"
                    placeholder="Маълумот нест (холӣ гузоред)"
                    value={data.district ?? ''}
                    onChange={(e) => handleFieldChange('district', e.target.value)}
                    className="w-full px-2 py-1 border border-slate-300 rounded text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                ) : data.district ? (
                  <span className="text-slate-900 font-bold">{data.district}</span>
                ) : (
                  <MissingValue />
                )}
              </td>
            </tr>

            {/* Row 6: Ҷои зист */}
            <tr className="border-b border-slate-200">
              <td className="py-2.5 px-3.5 text-slate-700 bg-slate-50/70 font-normal align-top border-r border-slate-200">
                Ҷои зист:
              </td>
              <td className="py-2.5 px-3.5 text-slate-900 font-bold align-top leading-snug">
                {isEditing ? (
                  <input
                    type="text"
                    value={data.address}
                    onChange={(e) => handleFieldChange('address', e.target.value)}
                    className="w-full px-2 py-1 border border-slate-300 rounded font-semibold text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                ) : (
                  data.address
                )}
              </td>
            </tr>

            {/* Row 7: Миллат */}
            <tr>
              <td className="py-2.5 px-3.5 text-slate-700 bg-slate-50/70 font-normal align-top border-r border-slate-200">
                Миллат:
              </td>
              <td className="py-2.5 px-3.5 text-slate-900 font-bold align-top">
                {isEditing ? (
                  <input
                    type="text"
                    value={data.ethnicity}
                    onChange={(e) => handleFieldChange('ethnicity', e.target.value)}
                    className="w-full px-2 py-1 border border-slate-300 rounded font-semibold text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                ) : (
                  data.ethnicity
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table 2: Account and Identification */}
      <div id="table-account-info" className="overflow-hidden rounded-lg border border-slate-200 mb-8 bg-white">
        <table className="w-full text-left text-sm border-collapse">
          <tbody>
            {/* Row 1: Ҷинс */}
            <tr className="border-b border-slate-200">
              <td className="w-[34%] sm:w-[30%] py-2.5 px-3.5 text-slate-700 bg-slate-50/70 font-normal align-top border-r border-slate-200">
                Ҷинс:
              </td>
              <td className="py-2.5 px-3.5 text-slate-900 font-bold align-top">
                {isEditing ? (
                  <input
                    type="text"
                    value={data.gender}
                    onChange={(e) => handleFieldChange('gender', e.target.value)}
                    className="w-full px-2 py-1 border border-slate-300 rounded font-semibold text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                ) : (
                  data.gender
                )}
              </td>
            </tr>

            {/* Row 2: Рӯзи таваллуд */}
            <tr className="border-b border-slate-200">
              <td className="py-2.5 px-3.5 text-slate-700 bg-slate-50/70 font-normal align-top border-r border-slate-200">
                Рӯзи таваллуд:
              </td>
              <td className="py-2.5 px-3.5 align-top">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-slate-900 font-bold">{data.birthDate}</span>
                  <span className="inline-flex items-center gap-1.5 text-slate-500 text-xs sm:text-sm">
                    <span className="text-slate-400 font-normal">Сину сол:</span>
                    <span className="text-slate-900 font-bold text-sm sm:text-base">{data.age}</span>
                  </span>
                </div>
              </td>
            </tr>

            {/* Row 3: Телефон */}
            <tr className="border-b border-slate-200">
              <td className="py-2.5 px-3.5 text-slate-700 bg-slate-50/70 font-normal align-top border-r border-slate-200">
                Телефон:
              </td>
              <td className="py-2.5 px-3.5 text-slate-900 font-bold align-top">
                {isEditing ? (
                  <input
                    type="text"
                    value={data.phone}
                    onChange={(e) => handleFieldChange('phone', e.target.value)}
                    className="w-full px-2 py-1 border border-slate-300 rounded font-semibold text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                ) : (
                  data.phone
                )}
              </td>
            </tr>

            {/* Row 4: № Шинонома */}
            <tr>
              <td className="py-2.5 px-3.5 text-slate-700 bg-slate-50/70 font-normal align-top border-r border-slate-200">
                № Шинонома:
              </td>
              <td className="py-2.5 px-3.5 align-top">
                {isEditing ? (
                  <input
                    type="text"
                    placeholder="Маълумот нест (холӣ гузоред)"
                    value={data.passportNumber ?? ''}
                    onChange={(e) => handleFieldChange('passportNumber', e.target.value)}
                    className="w-full px-2 py-1 border border-slate-300 rounded text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                ) : data.passportNumber ? (
                  <span className="text-slate-900 font-bold">{data.passportNumber}</span>
                ) : (
                  <MissingValue />
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 2: Educational Info Heading */}
      <div id="education-header" className="mb-4">
        <h2
          id="education-title"
          className="text-[15px] sm:text-base font-bold text-slate-900 tracking-tight"
        >
          Маълумотнома дар бораи таҳсилоти донишҷӯ
        </h2>
      </div>

      {/* Table 3: Educational Information */}
      <div id="table-education-info" className="overflow-hidden rounded-lg border border-slate-200 bg-white">
        <table className="w-full text-left text-sm border-collapse">
          <tbody>
            {/* Row 1: Факултет */}
            <tr className="border-b border-slate-200">
              <td className="w-[34%] sm:w-[30%] py-2.5 px-3.5 text-slate-700 bg-slate-50/70 font-normal align-top border-r border-slate-200">
                Факултет:
              </td>
              <td className="py-2.5 px-3.5 text-slate-900 font-bold align-top">
                {isEditing ? (
                  <input
                    type="text"
                    value={data.faculty}
                    onChange={(e) => handleFieldChange('faculty', e.target.value)}
                    className="w-full px-2 py-1 border border-slate-300 rounded font-semibold text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                ) : (
                  data.faculty
                )}
              </td>
            </tr>

            {/* Row 2: Курс */}
            <tr className="border-b border-slate-200">
              <td className="py-2.5 px-3.5 text-slate-700 bg-slate-50/70 font-normal align-top border-r border-slate-200">
                Курс:
              </td>
              <td className="py-2.5 px-3.5 text-slate-900 font-bold align-top">
                {isEditing ? (
                  <input
                    type="text"
                    value={data.course}
                    onChange={(e) => handleFieldChange('course', e.target.value)}
                    className="w-full px-2 py-1 border border-slate-300 rounded font-semibold text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                ) : (
                  data.course
                )}
              </td>
            </tr>

            {/* Row 3: Ихтисос */}
            <tr className="border-b border-slate-200">
              <td className="py-2.5 px-3.5 text-slate-700 bg-slate-50/70 font-normal align-top border-r border-slate-200">
                Ихтисос:
              </td>
              <td className="py-2.5 px-3.5 text-slate-900 font-bold align-top leading-snug">
                {isEditing ? (
                  <input
                    type="text"
                    value={data.specialty}
                    onChange={(e) => handleFieldChange('specialty', e.target.value)}
                    className="w-full px-2 py-1 border border-slate-300 rounded font-semibold text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                ) : (
                  data.specialty
                )}
              </td>
            </tr>

            {/* Row 4: Гурӯҳ */}
            <tr className="border-b border-slate-200">
              <td className="py-2.5 px-3.5 text-slate-700 bg-slate-50/70 font-normal align-top border-r border-slate-200">
                Гурӯҳ:
              </td>
              <td className="py-2.5 px-3.5 text-slate-900 font-bold align-top">
                {isEditing ? (
                  <input
                    type="text"
                    value={data.group}
                    onChange={(e) => handleFieldChange('group', e.target.value)}
                    className="w-full px-2 py-1 border border-slate-300 rounded font-semibold text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                ) : (
                  data.group
                )}
              </td>
            </tr>

            {/* Row 5: Зинаи таҳсил */}
            <tr className="border-b border-slate-200">
              <td className="py-2.5 px-3.5 text-slate-700 bg-slate-50/70 font-normal align-top border-r border-slate-200">
                Зинаи таҳсил:
              </td>
              <td className="py-2.5 px-3.5 text-slate-900 font-bold align-top">
                {isEditing ? (
                  <input
                    type="text"
                    value={data.degreeLevel}
                    onChange={(e) => handleFieldChange('degreeLevel', e.target.value)}
                    className="w-full px-2 py-1 border border-slate-300 rounded font-semibold text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                ) : (
                  data.degreeLevel
                )}
              </td>
            </tr>

            {/* Row 6: Шакли таҳсил */}
            <tr className="border-b border-slate-200">
              <td className="py-2.5 px-3.5 text-slate-700 bg-slate-50/70 font-normal align-top border-r border-slate-200">
                Шакли таҳсил:
              </td>
              <td className="py-2.5 px-3.5 text-slate-900 font-bold align-top">
                {isEditing ? (
                  <input
                    type="text"
                    value={data.studyForm}
                    onChange={(e) => handleFieldChange('studyForm', e.target.value)}
                    className="w-full px-2 py-1 border border-slate-300 rounded font-semibold text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                ) : (
                  data.studyForm
                )}
              </td>
            </tr>

            {/* Row 7: Намуди таҳсил */}
            <tr>
              <td className="py-2.5 px-3.5 text-slate-700 bg-slate-50/70 font-normal align-top border-r border-slate-200">
                Намуди таҳсил:
              </td>
              <td className="py-2.5 px-3.5 text-slate-900 font-bold align-top">
                {isEditing ? (
                  <input
                    type="text"
                    value={data.studyType}
                    onChange={(e) => handleFieldChange('studyType', e.target.value)}
                    className="w-full px-2 py-1 border border-slate-300 rounded font-semibold text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                ) : (
                  data.studyType
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
