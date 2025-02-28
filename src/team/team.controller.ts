import { Controller, Post, Body, Session, Get, Query } from '@nestjs/common';
import { TeamService } from './team.service';
import {
  JoinTeam,
  AddManager,
  ApplyTeam,
  AddMember,
  EditTeam,
  PreviewlistDto,
} from './dto/team.dto';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post('/apply')
  apply(@Body() applyTeam: ApplyTeam) {
    return this.teamService.apply(applyTeam);
  }

  @Post('/audit')
  audit(@Body() joinTeam: JoinTeam, @Session() session) {
    return this.teamService.audit(joinTeam, session);
  }

  @Get('/list')
  list(@Query('id') id: string, @Session() session) {
    return this.teamService.list(id);
  }

  @Get('/members')
  members(@Query('id') id: string) {
    return this.teamService.members(id);
  }

  @Post('/addManager')
  addManager(@Body() addManager: AddManager, @Session() session) {
    return this.teamService.addManager(addManager, session);
  }

  @Post('/addMember')
  addMember(@Body() addMember: AddMember, @Session() session) {
    return this.teamService.addMember(addMember, session);
  }

  @Post('/editTeam')
  editTeam(@Body() addMember: EditTeam, @Session() session) {
    return this.teamService.createTeam(addMember, session);
  }

  @Post('/exitTeam')
  exitTeam(@Body() addMember: object, @Session() session) {
    return this.teamService.exitTeam(session.userInfo);
  }

  @Get('/detail')
  detail(@Query('id') id: string, @Session() session) {
    return this.teamService.detail(id, session);
  }

  @Post('/previewlist')
  previewlist(@Body() listBody: PreviewlistDto, @Session() session) {
    return this.teamService.findAll(listBody, session);
  }
}
