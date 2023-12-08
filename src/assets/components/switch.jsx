import React, { useState } from 'react';
import classNames from 'classnames';

export default function Switch() {
    const [isSelected, setIsSelected] = useState(true);
    return (

        <div className='flex'>
            <div
                onClick={() => setIsSelected(!isSelected)}
                className={classNames(
                    'flex w-8 h-5 p-0.5 bg-blue-800 ml-3 rounded-full transition-all duration-500',
                    {
                        'bg-blue-800': isSelected,

                    }
                )}
            >
                <span
                    className={classNames(
                        'h-4 w-4 bg-white rounded-full transition-all duration-500',
                        {
                            'ml-3 ': isSelected,
                        }
                    )}
                />

            </div>
            <div className="pl-2 justify-start items-start flex">
                <div className="text-indigo-300 text-base font-normal font-['Inter'] leading-tight">{isSelected ? "ON" : "OFF"}</div>
            </div>
        </div>

    );
}
