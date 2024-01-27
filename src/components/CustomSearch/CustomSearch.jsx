import React from "react";
// import { InputAutocomplete } from "@alfalab/core-components-input-autocomplete";
import { Typography } from "@alfalab/core-components-typography";
import { IconButton } from "@alfalab/core-components-icon-button";
import { MagnifierMIcon } from '@alfalab/icons-glyph/MagnifierMIcon';
import { Input } from "@alfalab/core-components-input";


export default function CustomSearch () {
    const options = [
        { key: 'Neptunium' },
        { key: 'Plutonium' },
        { key: 'Americium' },
        { key: 'Curium' },
        { key: 'Berkelium' },
        { key: 'Californium' },
        { key: 'Einsteinium' },
        { key: 'Fermium' },
        { key: 'Mendelevium' },
        { key: 'Nobelium' },
        { key: 'Lawrencium' },
        { key: 'Rutherfordium' },
        { key: 'Dubnium' },
        { key: 'Seaborgium' },
        { key: 'Bohrium' },
    ];
    // const [shownChevron, setShownChevron] = React.useState(false);
    // const [multiple, setMultiple] = React.useState(false);
    // const [showInModal, setShowInModal] = React.useState(false);
    const [value, setValue] = React.useState('');

    // const matchOption = (option, inputValue) =>
    //     option.key.toLowerCase().includes((inputValue || '').toLowerCase());

    const handleInput = (_, { value }) => {
        setValue(value);
    };
    // const handleChange = ({ selected }) => {
    //     setValue(selected ? selected.key : '');
    // };
    // const inputValues = value.replace(/ /g, '').split(',');
    // const selectedOptions = options.filter((option) => inputValues.includes(option.key.trim()));
    // const selected = options.find((o) => o.key === inputValues[0]) || [];
    // const getFilteredOptions = () => {
    //     return options.some(({ key }) => key === value)
    //         ? options
    //         : options.filter((option) => matchOption(option, value));
    // };

    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
            <Input
                breakpoint={500}
                size='s'
                type="text"
                value={value}
                placeholder='Поиск'
                block={true}
                onChange={handleInput}
                
                leftAddons={
                    <IconButton
                        view='secondary'
                        icon={MagnifierMIcon}
                        size='xs'
                        alignIcon='right'
                    />
                } 
            />
        </div>
    );
}