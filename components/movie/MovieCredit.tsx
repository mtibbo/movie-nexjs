import { CastList } from "components/cast/CastList"
import { MovieCredits, Department } from "lib/types"

interface MovieCreditProps {
    credits: MovieCredits
}

export const MovieCredit = ({ credits }: MovieCreditProps) => {
    const members = [...credits.crew, ...credits.cast];
    return (
        <div className="grid grid-cols-2 gap-10">
            <div>
                <CastList
                    casts={members}
                    title="Director"
                    limit={4}
                    castType={Department.Directing} />
            </div>
            <div>
                <CastList
                    casts={members}
                    title="Writers"
                    limit={4}
                    castType={Department.Writing} />
            </div>

            <div className="col-span-2">
                <CastList
                    limit={8}
                    casts={members}
                    title="Starring"
                    castType={Department.Acting} />
            </div>

        </div>
    )
}