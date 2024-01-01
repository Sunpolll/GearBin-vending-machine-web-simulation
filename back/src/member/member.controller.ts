import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { MemberService } from './member.service';

@Controller('member')
export class MemberController {
    constructor(private readonly memberService: MemberService) {}
    @Get()
    async getpoint(@Param('tel')tel:string):Promise<number>{
        try {
            return await this.memberService.getpoint(tel);
        } catch (error) {
            throw new HttpException('EXPECTATION_FAILED', HttpStatus.EXPECTATION_FAILED);
        }
    }
    @Post()
    async addpoint(@Body()data:{tel:string,point:number}){
        
        try {
            return await this.memberService.addpoint(data);
        } catch (error) {
            throw new HttpException('EXPECTATION_FAILED', HttpStatus.EXPECTATION_FAILED);
        }
    }
}
