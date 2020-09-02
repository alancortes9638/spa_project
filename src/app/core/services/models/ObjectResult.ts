export class ObjectResultBaseDto<TDataType> {
    public success: boolean;
    public messages: string;
    public data: TDataType;
}

export class ObjectResultDto extends ObjectResultBaseDto<any> {

}
